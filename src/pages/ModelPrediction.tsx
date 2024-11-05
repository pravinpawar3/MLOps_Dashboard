import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CheckboxFive from '../components/Checkboxes/CheckboxFive';
import CheckboxFour from '../components/Checkboxes/CheckboxFour';
import CheckboxModel from '../components/Checkboxes/CheckboxModel';
import CheckboxOne from '../components/Checkboxes/CheckboxOne';
import CheckboxThree from '../components/Checkboxes/CheckboxThree';
import CheckboxTwo from '../components/Checkboxes/CheckboxTwo';
import SwitcherFour from '../components/Switchers/SwitcherFour';
import SwitcherOne from '../components/Switchers/SwitcherOne';
import SwitcherThree from '../components/Switchers/SwitcherThree';
import SwitcherTwo from '../components/Switchers/SwitcherTwo';
import DatePickerOne from '../components/Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../components/Forms/DatePicker/DatePickerTwo';
import SelectGroupTwo from '../components/Forms/SelectGroup/SelectGroupTwo';
import SelectModels from '../components/Forms/SelectGroup/SelectModels';
import MultiSelect from '../components/Forms/MultiSelect';
import ApiService from '../api/apiService';
import React, { useState } from 'react';

/*
  ModelPrediction Page:
  - Manages Model Predictions
*/
const ModelPrediction = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [predictionResult, setPredictionResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isChecked, setisChecked] = useState(false); // State for the first checkbox
  const [isCheckedForModel, setIsCheckedForModel] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [file, setFile] = useState(null);
  const [modelSelected, setModelSelected] = useState(false);
  const [model, setModel] = useState(null);


  const handleCheckboxChangeForModel = (checked: boolean) => {
      setIsCheckedForModel(checked);
  };

    const handleCheckboxChange1 = (checked: boolean) => {
        setisChecked(checked);
    };

  const handleFilePredict = () => {
     // Reset initial states

     setError(null);
     setPredictionResult(""); // Display an initial placeholder result
     const isHDF5 = isValidHDF5File(file)
     if(!isHDF5){
          alert('Please select a valid HDF5 file (.hd5 or .hdf5)');
          return
     }
     setLoading(true);
     // Create a FormData object to send the file
     const formData = new FormData();
     formData.append('File', file); // Append the file
     // Start prediction process
     ApiService.makePrediction(file)
       .then((result) => {
         // Update prediction result if data is successfully fetched
         if (result){
          setPredictionResult(result); // Use the result from the response

         } else {
           setPredictionResult("No result available"); // Fallback if result is empty
         }
       })
       .catch((err) => {
         // Handle any errors by setting the error message
         setError("Failed to fetch prediction: " + (err.message || "Unknown error"));
         setPredictionResult(err.message); // Clear result on error
       })
       .finally(() => {
         // Stop loading in all cases (success or failure)
         setLoading(false);
       });
   };

   // Function to validate if the file is a valid HDF5 file
   const isValidHDF5File = (file) => {
         var isValid = false
          if(file){
               // Validate File is HDF5 format
               const fileName = file.name;
               isValid =  fileName.endsWith('.hd5') || fileName.endsWith('.hdf5');
               if(!isValid){
                 setPredictionResult('File Format is not HDF5')
                 alert('Please select a valid HDF5 file (.hd5 or .hdf5)');
               }
          }
         return isValid;
      }

   const handleFileChange = (event) => {

     // Clear previous predictionResult
      setPredictionResult('')

     // Check if a file has been selected
       if (event.target.files.length > 0) {
         const file = event.target.files[0];

         // Validate the file format by checking the extension
        const isHDF5 = isValidHDF5File(file)
          if (isHDF5){
             setFileSelected(true);
             setFile(file);
           } else {
             setFileSelected(false); // Reset if no file is selected
             setFile(null);
           }
         }else{
               setFileSelected(false); // Reset if no file is selected
               setFile(null);
       }
     };

     const handleModelFileChange = (event) => {

       // Clear previous predictionResult
        setPredictionResult('')

       // Check if a file has been selected
         if (event.target.files.length > 0) {
           setModelSelected(true);
           setModel(event.target.files[0]);
         } else {
           setModelSelected(false); // Reset if no file is selected
           setModel(null);
         }
       };

  return (
    <>
      <Breadcrumb pageName="Model Prediction" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">

          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

            <div className="flex flex-col gap-5.5 p-6.5 sm:grid-cols-2">

            <h1 className="text-2xl font-bold">Select Model</h1> {/* Increased size */}
            <CheckboxModel label="Existing Model"
              isChecked={isCheckedForModel}
              onChange={handleCheckboxChangeForModel} id='12'/>
              {isCheckedForModel && <SelectModels />}
            <div>

            <CheckboxModel label="Upload Model"
            isChecked={!isCheckedForModel} onChange={handleCheckboxChangeForModel}  id='23' />

              <label className="mb-3  ml-2 block text-black dark:text-white " >

              </label>
              {!isCheckedForModel &&
              <input
                type="file"
                onChange={handleModelFileChange}
                style={{ width: '300px',  height: '40px', fontSize: '15px', padding: '7px' }}
                className=" rounded-md border border-stroke p-3  ml-2 mb-3 outline-none transition file:mr-2.0 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-0.95 file:mt-0.95 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
              />}


              {!isCheckedForModel &&
                    <a class=" inline-flex items-center ml-2 mt-1  justify-center rounded-md bg-primary py-2 px-8 text-center font-medium text-white hover:bg-opacity-90 lg:px-2 xl:px-3" >Upload</a>

                }

            </div>

            </div>


            <div className="flex flex-col gap-5.5 p-6.5 sm:grid-cols-2 ">
            <h1 className="text-2xl font-bold">Select Dataset</h1> {/* Increased size */}
            <h5 className="text-sm font-light">Note: Only HDF5 format accepted</h5> {/* Reduced size */}
              <CheckboxFour label="Existing dataset"
              isChecked={isChecked}
                onChange={handleCheckboxChange1} id='1112'/>
                {isChecked && <SelectGroupTwo />}
              <div>

              <CheckboxFour label="Upload dataset"
              isChecked={!isChecked} onChange={handleCheckboxChange1}  id='23' />

                <label className="mb-3  ml-2 block text-black dark:text-white " >

                </label>
                {!isChecked &&
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ width: '300px',  height: '40px', fontSize: '15px', padding: '7px' }}
                  className=" rounded-md border border-stroke p-3  ml-2 mb-3 outline-none transition file:mr-2.0 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-0.95 file:mt-0.95 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                />}


                {!isChecked &&
                      <a class=" inline-flex items-center ml-2 mt-1  justify-center rounded-md bg-primary py-2 px-8 text-center font-medium text-white hover:bg-opacity-90 lg:px-2 xl:px-3" >Upload</a>

                  }

              </div>

            </div>

            <div className="flex flex-col gap-5.5 p-6.5">
                  <h1 className="text-2xl font-bold">Make Prediction</h1> {/* Increased size */}
              <div>


              <label className="mb-3 block text-black dark:text-white">
                <button
                  className={`inline-flex items-center justify-center rounded-md bg-primary py-2 px-8 text-center font-medium text-white ${
                    loading ? 'bg-opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'
                  } lg:px-6 xl:px-4`}
                  onClick={handleFilePredict}
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Predict'}
                </button>
              </label>
              <textarea
                        rows={6}
                        placeholder="Model response"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        value={
                          Array.isArray(predictionResult) && predictionResult.length > 0
                            ? predictionResult.map(item => `${item}`).join('\n')  // Join array items with a newline
                            : typeof predictionResult === 'string'
                            ? predictionResult  // If predictionResult is a string, display it as-is
                            : predictionResult === null || predictionResult === undefined
                            ? 'Response is unavailable'  // If predictionResult is null or undefined
                            : 'Invalid response format'  // Handle other unexpected types
                        }
                        style={{
                          whiteSpace: 'pre-line',
                          fontFamily: 'monospace',  // Monospace font for consistent alignment
                          lineHeight: '1.3',  // Improved line spacing for readability
                          fontSize: '16px',
                        }}
                        readOnly
                      />

                    </div>
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default ModelPrediction;
