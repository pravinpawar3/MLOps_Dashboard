import React, { useState } from 'react';

const initialModelData = [
  {
    name: 'ECG2AF',
    lastUpdated: '2024-11-01',
    user: 'Alice Smith',
    datasets: '30',
    referencePath: 'ecg2af_v1.h5',
  },
  {
    name: 'ECGNet',
    lastUpdated: '2024-10-01',
    user: 'John Doe',
    datasets: '20',
    referencePath: 'ecgnet_v1.h5',
  },
  {
    name: 'HeartNet',
    lastUpdated: '2024-07-01',
    user: 'Emily Johnson',
    datasets: '11',
    referencePath: 'heartnet_v1.h5',
  },
  {
    name: 'ArrhythmiaNet',
    lastUpdated: '2024-06-01',
    user: 'Mark Brown',
    datasets: '15',
    referencePath: 'arrhythmia_v1.h5',
  },
  {
    name: 'DeepECG',
    lastUpdated: '2024-04-01',
    user: 'Sarah Davis',
    datasets: '5',
    referencePath: 'deep_ecg_v1.h5',
  },
  {
    name: 'CardioMonitor',
    lastUpdated: '2024-05-15',
    user: 'John Doe',
    datasets: '10',
    referencePath: 'cardio_v1.h5',
  },
  {
    name: 'AtrialDetect',
    lastUpdated: '2024-03-10',
    user: 'Alice Smith',
    datasets: '8',
    referencePath: 'atrial_v1.h5',
  },
  {
    name: 'VentricularTracker',
    lastUpdated: '2024-02-20',
    user: 'Michael Lee',
    datasets: '9',
    referencePath: 'ventricular_v1.h5',
  },
  {
    name: 'ECG-Analyzer',
    lastUpdated: '2024-01-25',
    user: 'Jessica Kim',
    datasets: '14',
    referencePath: 'ecg_analyzer_v1.h5',
  },
];

const ModelActivityTable = () => {
  const [models, setModels] = useState(initialModelData);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    lastUpdated: '',
    user: '',
    datasets: '',
    referencePath: '',
  });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setFormData(models[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedModels = [...models];
    updatedModels[editIndex] = { ...formData, lastUpdated: new Date().toISOString().split('T')[0] };
    setModels(updatedModels);
    setEditIndex(null);
    setFormData({ name: '', lastUpdated: '', user: '', datasets: '', referencePath: '' });
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Model Details</h4>

      {editIndex !== null && (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Model Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastUpdated"
            placeholder="Last Updated"
            value={formData.lastUpdated}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="user"
            placeholder="Modifying User"
            value={formData.user}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="datasets"
            placeholder="Datasets"
            value={formData.datasets}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="referencePath"
            placeholder="File Names"
            value={formData.referencePath}
            onChange={handleChange}
            required
          />
          <button type="submit">Update Model</button>
        </form>
      )}

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5"><h5 className="text-sm font-medium uppercase xsm:text-base">Model Name</h5></div>
          <div className="p-2.5 text-center xl:p-5"><h5 className="text-sm font-medium uppercase xsm:text-base">Last Updated</h5></div>
          <div className="p-2.5 text-center xl:p-5"><h5 className="text-sm font-medium uppercase xsm:text-base">Modifying User</h5></div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5"><h5 className="text-sm font-medium uppercase xsm:text-base">Datasets</h5></div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5"><h5 className="text-sm font-medium uppercase xsm:text-base">File Names</h5></div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5"><h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5></div>
        </div>

        {models.map((model, index) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              index === models.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={index}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">{model.name}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{model.lastUpdated}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{model.user}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{model.datasets}</p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{model.referencePath}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button onClick={() => handleEditClick(index)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelActivityTable;
