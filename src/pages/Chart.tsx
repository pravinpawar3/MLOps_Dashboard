import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ModelActivity from '../components/Charts/ModelActivity';
import ModelDatasetMonthlyUsage from '../components/Charts/ModelDatasetMonthlyUsage';
/*
  Chart component manages plot for :
  - Total Models vs Total Datasets
  - Model Activity
*/
const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ModelDatasetMonthlyUsage />
        <ModelActivity />
      </div>
    </>
  );
};

export default Chart;
