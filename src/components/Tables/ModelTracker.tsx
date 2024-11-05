import React from 'react';

const modelData = [
  {
    name: 'ECG2AF',
    lastUpdated: '2024-11-01',
    user: 'Alice Smith',
    datasets: '30',
    referencePath: 'ECG2AF_v1.h5',
  },
  {
    name: 'ECGNet',
    lastUpdated: '2024-10-01',
    user: 'John Doe',
    datasets: '20',
    referencePath: 'ECGNet_v1.h5',
  },
  {
    name: 'HeartNet',
    lastUpdated: '2024-07-01',
    user: 'Emily Johnson',
    datasets: '11',
    referencePath: 'HeartNet_v1.h5',
  },
  {
    name: 'ArrhythmiaNet',
    lastUpdated: '2024-06-01',
    user: 'Mark Brown',
    datasets: '15',
    referencePath: 'ArrhythmiaNet_v1.h5',
  },
  {
    name: 'DeepECG',
    lastUpdated: '2024-04-01',
    user: 'Sarah Davis',
    datasets: '5',
    referencePath: 'DeepECG_v1.h5',
  },
  {
    name: 'CardioMonitor',
    lastUpdated: '2024-05-15',
    user: 'John Doe',
    datasets: '10',
    referencePath: 'CardioMonitor_v1.h5',
  },
  {
    name: 'AtrialDetect',
    lastUpdated: '2024-03-10',
    user: 'Alice Smith',
    datasets: '8',
    referencePath: 'AtrialDetect_v1.h5',
  },
  {
    name: 'VentricularTracker',
    lastUpdated: '2024-02-20',
    user: 'Michael Lee',
    datasets: '9',
    referencePath: 'VentricularTracker_v1.h5',
  },
  {
    name: 'ECG-Analyzer',
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
            <h5 className="text-sm font-medium uppercase xsm:text-base">Model Name</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Last Updated</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Modified By</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Reference Path</h5>
          </div>
        </div>

        {modelData.map((model, key) => (
          <div
            className={`grid grid-cols-4 ${
              key === modelData.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
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
              <p className="text-black dark:text-white">{model.referencePath}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelActivityTable;
