import React from 'react';
import CardDataStats from '../components/CardDataStats';
import ModelActivity from '../components/Charts/ModelActivity';
import ModelDatasetMonthlyUsage from '../components/Charts/ModelDatasetMonthlyUsage';
import AlertCard from '../components/Alert/AlertCard';
import ModelTracker from '../components/Tables/ModelTracker';
import CloudStorage from '../images/icon/cloud-storage.png';
import Instances from '../images/icon/Instances.png';
import Cube from '../images/icon/cubes.png';
import Users from '../images/icon/users.png';

/*
  ML4HDashboard Page:
  - Provides comprehensive view of all model, data
  - and user activties for effective decision making.
*/
const ML4HDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Number of Models" total="300" rate="23%" levelUp>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="ai-network">
            <defs>
              <linearGradient id="a" x1="7.173" x2="42.827" y1="7.173" y2="42.827" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#00efd9"></stop>
                <stop offset="1" stop-color="#5d74f2"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#a)" d="M45,30.142V19.858a3.99054,3.99054,0,1,0-2.6336-7.5008L39.1903,8.3873A3.96256,3.96256,0,0,0,40,6a3.99156,3.99156,0,0,0-7.858-1H17.858A3.98982,3.98982,0,1,0,10.81,8.3874l-3.17609,3.97A3.9642,3.9642,0,0,0,6,12a3.99156,3.99156,0,0,0-1,7.858V30.142a3.99049,3.99049,0,1,0,2.63367,7.5006l3.17623,3.9701A3.96164,3.96164,0,0,0,10,44a3.99156,3.99156,0,0,0,7.858,1H32.142a3.98985,3.98985,0,1,0,7.0483-3.3872l3.1762-3.9699A3.98995,3.98995,0,1,0,45,30.142ZM36,40a3.96257,3.96257,0,0,0-1.6333.357l-3.176-3.9702a3.95528,3.95528,0,0,0,.1285-4.6159l4.6807-5.2658,4.6808,5.2661a3.95494,3.95494,0,0,0,.1288,4.6158l-3.1763,3.97A3.9637,3.9637,0,0,0,36,40Zm-23.6336.3573-3.17628-3.97a3.95426,3.95426,0,0,0,.12915-4.6159l4.68083-5.2658,4.6806,5.2657a3.95428,3.95428,0,0,0,.1292,4.6159l-3.1761,3.9702a3.91308,3.91308,0,0,0-3.2674-.0001ZM7.81311,19.5452l4.84879,5.4549L7.81305,30.4548A3.95043,3.95043,0,0,0,7,30.142V19.858A3.95072,3.95072,0,0,0,7.81311,19.5452ZM14,10a3.9644,3.9644,0,0,0,1.6339-.3574l3.1761,3.97a3.95447,3.95447,0,0,0-.1292,4.6163l-4.6807,5.2656L9.31934,18.2286a3.95437,3.95437,0,0,0-.12909-4.6157L12.3665,9.6428A3.96364,3.96364,0,0,0,14,10Zm23.6332-.3569,3.1762,3.97a3.95507,3.95507,0,0,0-.1286,4.6159l-4.6809,5.2661L31.3192,18.229a3.95507,3.95507,0,0,0-.1286-4.6159l3.1759-3.9703a3.91446,3.91446,0,0,0,3.2667.0003ZM22,18a2,2,0,1,1,2-2A2.002,2.002,0,0,1,22,18Zm-1.8128,1.5453A3.94755,3.94755,0,0,0,21,19.858V30.142a3.95176,3.95176,0,0,0-.813.3128l-4.8486-5.4547ZM20,34a2,2,0,1,1,2,2A2.002,2.002,0,0,1,20,34Zm3-3.858V19.858a3.98268,3.98268,0,0,0,2-1.2404,3.98268,3.98268,0,0,0,2,1.2404V30.142a3.98268,3.98268,0,0,0-2,1.2404A3.98268,3.98268,0,0,0,23,30.142ZM30,16a2,2,0,1,1-2-2A2.00233,2.00233,0,0,1,30,16ZM28,32a2,2,0,1,1-2,2A2.00233,2.00233,0,0,1,28,32Zm1.8134-1.5451A3.94189,3.94189,0,0,0,29,30.142V19.858a3.943,3.943,0,0,0,.8135-.313l4.8486,5.4551Zm2.996-22.068-3.1759,3.9703A3.93587,3.93587,0,0,0,25,13.3824a3.93587,3.93587,0,0,0-4.6335-1.0252L17.1902,8.3871A3.96851,3.96851,0,0,0,17.858,7H32.142A3.96759,3.96759,0,0,0,32.8094,8.3869ZM17.1902,41.6129l3.1761-3.9703A3.93552,3.93552,0,0,0,25,36.6176a3.93617,3.93617,0,0,0,4.6337,1.0252l3.1759,3.9701A3.96636,3.96636,0,0,0,32.142,43H17.858A3.96851,3.96851,0,0,0,17.1902,41.6129ZM42.1863,30.4551l-4.8487-5.455,4.8489-5.4551A3.943,3.943,0,0,0,43,19.858V30.142A3.94853,3.94853,0,0,0,42.1863,30.4551ZM46,16a2,2,0,1,1-2-2A2.00233,2.00233,0,0,1,46,16ZM36,4a2,2,0,1,1-2,2A2.00233,2.00233,0,0,1,36,4ZM14,4a2,2,0,1,1-2,2A2.002,2.002,0,0,1,14,4ZM4,16a2,2,0,1,1,2,2A2.002,2.002,0,0,1,4,16ZM4,34a2,2,0,1,1,2,2A2.002,2.002,0,0,1,4,34ZM14,46a2,2,0,1,1,2-2A2.002,2.002,0,0,1,14,46Zm22,0a2,2,0,1,1,2-2A2.00233,2.00233,0,0,1,36,46Zm8-10a2,2,0,1,1,2-2A2.00233,2.00233,0,0,1,44,36Z"></path>
          </svg>


        </CardDataStats>
        <CardDataStats title="Number of Instances" total="600" rate="4.35%" levelUp>
          <img src={Cube}></img>

        </CardDataStats>
        <CardDataStats title="Number of Datasets" total="250" rate="30%" levelUp>
            <img src={CloudStorage}></img>

        </CardDataStats>
        <CardDataStats title="Active Users" total="350" rate="10%" levelDown>

          <img src={Users}></img>

        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ModelDatasetMonthlyUsage />
        <ModelActivity />
        <div className="col-span-12 xl:col-span-8">
          <ModelTracker />
        </div>
        <AlertCard />
      </div>
    </>
  );
};

export default ML4HDashboard;
