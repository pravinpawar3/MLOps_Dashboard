import React from 'react';

const datasets = [
  {
    name: 'ECG2AF_Dataset_v1',
    lastUpdated: '2024-11-01',
    user: 'Alice Smith',
    datasets: '30',
    referencePath: 'ECG2AF_v1.h5',
  },
  {
    name: 'ECG2AF_Dataset_v2',
    lastUpdated: '2024-10-01',
    user: 'John Doe',
    datasets: '20',
    referencePath: 'ECG2AF_v2.h5',
  },
  {
    name: 'HeartNet_Dataset_v1',
    lastUpdated: '2024-07-01',
    user: 'Emily Johnson',
    datasets: '11',
    referencePath: 'HeartNet_v1.h5',
  },
  {
    name: 'ArrhythmiaNet_Dataset_v1',
    lastUpdated: '2024-06-01',
    user: 'Mark Brown',
    datasets: '15',
    referencePath: 'ArrhythmiaNet_v1.h5',
  },
  {
    name: 'DeepECG_Dataset_v1',
    lastUpdated: '2024-04-01',
    user: 'Sarah Davis',
    datasets: '5',
    referencePath: 'DeepECG_ecg_v1.h5',
  },
  {
    name: 'DeepECG_Dataset_v2',
    lastUpdated: '2024-05-15',
    user: 'John Doe',
    datasets: '10',
    referencePath: 'DeepECG_v1.h5',
  },
  {
    name: 'DeepECG_Dataset_v3',
    lastUpdated: '2024-03-10',
    user: 'Alice Smith',
    datasets: '8',
    referencePath: 'DeepECG_v1.h5',
  },
  {
    name: 'VentricularTracker_Dataset_v1',
    lastUpdated: '2024-02-20',
    user: 'Michael Lee',
    datasets: '9',
    referencePath: 'VentricularTracker_v1.h5',
  },
  {
    name: 'ECG-Analyzer_Dataset_v1',
    lastUpdated: '2024-01-25',
    user: 'Jessica Kim',
    datasets: '14',
    referencePath: 'ECG-Analyzer_v1.h5',
  },
];

const ModelActivityTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Dataset Name</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Last Updated</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Modified By</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5>
          </div>
        </div>

        {datasets.map((model, key) => (
          <div
            className={`grid grid-cols-4 ${
              key === datasets.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{model.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{model.lastUpdated}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{model.user}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <div className="flex items-center space-x-3.5">
              <div className="flex items-center space-x-3.5">
              <button className="hover:text-primary flex items-center space-x-2" aria-label="Update">
<svg
className="fill-current"
fill="none"
height="18px"
width="18px"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 0 511.68 511.68"
xmlSpace="preserve"
className="fill-current"
>
<g>
<g>
  <path d="M299.575,383.787c5.547,1.813,11.627-1.173,13.44-6.72c11.2-33.92,41.28-56.64,74.667-56.64 c29.653,0,58.027,17.173,72.533,42.24h-28.267c-5.333,0-10.133,3.84-10.88,9.067c-0.96,6.613,4.16,12.267,10.56,12.267h53.333 c5.867,0,10.667-4.8,10.667-10.667V320.32c0-5.333-3.84-10.133-9.067-10.88c-6.613-0.96-12.267,4.16-12.267,10.56v24.96 c-19.2-27.627-52.16-45.867-86.507-45.867c-42.667,0-80.747,28.693-94.933,71.253C290.935,375.893,294.028,381.973,299.575,383.787z"/>
  <path d="M488.802,426.88c-5.547-1.92-11.627,1.067-13.547,6.72c-11.52,33.92-42.453,56.747-77.013,56.747 c-30.613,0-59.733-17.173-74.667-42.24h33.067c5.333,0,10.133-3.84,10.88-9.067c0.96-6.613-4.16-12.267-10.56-12.267h-53.333 c-5.867,0-10.667,4.8-10.667,10.667v53.013c0,5.333,3.84,10.133,9.067,10.88c6.613,0.96,12.267-4.16,12.267-10.56v-18.987 c20.16,24.213,51.413,39.893,84.053,39.893c43.627,0,82.667-28.587,97.173-71.147C497.335,434.88,494.348,428.8,488.802,426.88z"/>
  <path d="M260.962,128h96v106.667h21.333V117.333c0-2.88-1.173-5.547-3.093-7.573L268.535,3.093 C266.508,1.173,263.842,0,260.962,0H26.295c-5.867,0-10.667,4.8-10.667,10.667v448c0,5.867,4.8,10.667,10.667,10.667h234.667V448 h-224V21.333h213.333v96C250.295,123.2,255.095,128,260.962,128z M271.628,36.373l70.293,70.293h-70.293V36.373z"/>
</g>
</g>
</svg>
</button>
                <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                      fill=""
                    />
                    <path
                      d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                      fill=""
                    />
                  </svg>
                </button>
                <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                      fill=""
                    />
                    <path
                      d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                      fill=""
                    />
                    <path
                      d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                      fill=""
                    />
                    <path
                      d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                      fill=""
                    />
                  </svg>
                </button>
                <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                      fill=""
                    />
                    <path
                      d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                      fill=""
                    />
                  </svg>
                </button>

              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelActivityTable;
