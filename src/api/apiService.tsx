// MLOps Backend Server
// SERVER_IP and SERVER_PORT from .env file
const SERVER_IP=import.meta.env.SERVER_IP;
const SERVER_PORT=import.meta.env.SERVER_PORT
const PREDICT_API_URL = `http://${SERVER_IP}:${SERVER_PORT}/predict`; // Prediction endpoint
const GET_API_URL = `http://${SERVER_IP}:${SERVER_PORT}/home`;

const TIMEOUT_DURATION = 1000000; // Set your desired timeout duration in milliseconds

export default {getRequest,  makePrediction };

// Function to handle fetch with a timeout
function fetchWithTimeout(url, options, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);

    fetch(url, options)
      .then(response => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch(err => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

// Function to make a GET request
export function getRequest(timeout = TIMEOUT_DURATION) {
  return fetchWithTimeout(GET_API_URL, {}, timeout)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .catch(error => {
      if (error.message === 'Request timed out') {
        throw new Error('The request timed out. Please try again.');
      }
      throw new Error(`Error fetching data: ${error.message}`);
    });
}

// Function to make a POST request for prediction
export function makePrediction(inputValue) {
  console.log('Response Data:', inputValue);
  const formData = new FormData();
  formData.append('file', inputValue);
  return fetchWithTimeout(
    PREDICT_API_URL,
    {
      method: 'POST',
      body: formData
    },
    TIMEOUT_DURATION
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json() ;
    })
    .then(data=>{
        console.log('Response Data:', data);
      return  data.response;}) // Adjust based on the structure of your API response
    .catch(error => {
      throw new Error(`Error making prediction: ${error.message}`);
    });
}
