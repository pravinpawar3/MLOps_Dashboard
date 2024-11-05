from flask import Flask, request, jsonify
import numpy as np
import os
import h5py
from tensorflow.keras.models import load_model
from ml4h.models.model_factory import get_custom_objects
from ml4h.tensormap.ukb.survival import mgb_afib_wrt_instance2
from ml4h.tensormap.ukb.demographics import age_2_wide, af_dummy, sex_dummy3
from flask_cors import CORS 

# Create a Flask application instance
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Base path for storing uploaded files
BASE_PATH = os.getenv('BASE_PATH', '/home/pravinpawar381997')

# Name of the model file (without the .h5 extension)
MODEL_NAME = os.getenv('MODEL_NAME', 'ecg_5000_survival_curve_af_quadruple_task_mgh_v2021_05_21') 

# Complete path for the model file
MODEL_PATH = os.path.join(BASE_PATH, f'{MODEL_NAME}.h5')

# Mapping of ECG lead names to their respective indices in the tensor
ECG_REST_LEADS = {
    'strip_I': 0, 'strip_II': 1, 'strip_III': 2, 'strip_V1': 3,
    'strip_V2': 4, 'strip_V3': 5, 'strip_V4': 6, 'strip_V5': 7,
    'strip_V6': 8, 'strip_aVF': 9, 'strip_aVL': 10, 'strip_aVR': 11,
}

# Shape of the ECG data tensor (5000 time points, 12 leads)
ECG_SHAPE = (5000, 12)

# Path in the HDF5 file to access ECG data
ECG_HD5_PATH = 'ukb_ecg_rest'

def ecg_as_tensor(ecg_file):
    """Convert the uploaded HDF5 ECG file to a normalized tensor."""
    try:
        with h5py.File(ecg_file, 'r') as hd5:
            tensor = np.zeros(ECG_SHAPE, dtype=np.float32)  # Initialize tensor
            # Populate tensor with ECG lead data from the HDF5 file
            for lead in ECG_REST_LEADS:
                data = np.array(hd5[f'{ECG_HD5_PATH}/{lead}/instance_0'])
                tensor[:, ECG_REST_LEADS[lead]] = data
            # Normalize the tensor data
            tensor -= np.mean(tensor)  # Subtract mean
            tensor /= np.std(tensor) + 1e-6  # Divide by standard deviation, add small constant to avoid division by zero
        return tensor
    except KeyError as e:
        raise ValueError(f"Missing data in HDF5 file: {str(e)}")
    except Exception as e:
        raise RuntimeError(f"Error processing HDF5 file: {str(e)}")

# Create a mapping of output tensor maps and load custom objects for the model
output_tensormaps = {tm.output_name(): tm for tm in [mgb_afib_wrt_instance2, age_2_wide, af_dummy, sex_dummy3]}
custom_dict = get_custom_objects([mgb_afib_wrt_instance2, age_2_wide, af_dummy, sex_dummy3])

# Load the pre-trained model for predictions
try:
    model = load_model(MODEL_PATH, custom_objects=custom_dict)
except Exception as e:
    raise RuntimeError(f"Error loading the model: {str(e)}")

# Define a simple GET endpoint that returns a greeting message
@app.route('/home', methods=['GET'])
def hello():
    return jsonify({"message": "Welcome to ML4H Server!"})

# Define a POST endpoint for making predictions with uploaded ECG data
@app.route('/predict', methods=['POST'])
def predict():
    """Handle the prediction request and return the results."""
    # Check if a file is part of the request
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400
    
    file = request.files['file']
    
    # Check if a file was actually selected
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    # Check if the uploaded file is an HDF5 file
    if not file.filename.endswith('.h5'):
        return jsonify({"error": "Uploaded file is not an HDF5 file. Please upload a .h5 file."}), 400
    
    # Save the uploaded HDF5 file to a temporary location
    file_path = os.path.join(BASE_PATH, file.filename)
    try:
        file.save(file_path)  # Save the file
    except Exception as e:
        return jsonify({"error": f"Failed to save file: {str(e)}"}), 500
    
    # Convert the uploaded HDF5 file to a tensor
    try:
        tensor = ecg_as_tensor(file_path)
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except RuntimeError as re:
        return jsonify({"error": str(re)}), 500

    # Make predictions using the model
    try:
        predictions = model.predict(np.expand_dims(tensor, axis=0))  # Expand dimensions for batch processing
    except Exception as e:
        return jsonify({"error": f"Prediction error: {str(e)}"}), 500

    results = []  # Store the results of predictions
    for name, pred in zip(model.output_names, predictions):
        otm = output_tensormaps[name]  # Get the corresponding output tensor map
        if otm.is_survival_curve():  # Check if the output is a survival curve
            intervals = otm.shape[-1] // 2  # Number of intervals for survival prediction
            days_per_bin = 1 + otm.days_window // intervals  # Calculate days per bin
            predicted_survivals = np.cumprod(pred[:, :intervals], axis=1)  # Calculate cumulative product for survival
            results.append(f'AF Risk {otm} prediction is: {str(1 - predicted_survivals[0, -1])}')  # Append result
        else:
            results.append(f'{otm} prediction is {pred}')  # Append other predictions

    # Return the predictions as a JSON response
    return jsonify({"response": results}), 201

if __name__ == '__main__':
    # Run the app on port 8889, accessible from any host
    app.run(host='0.0.0.0', port=os.getenv('PORT', 8889))
