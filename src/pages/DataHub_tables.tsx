import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import Datasets from '../components/Tables/Datasets';

/*
  Model Tables component:
  - Manages add, update, delete, or download user profile
*/
const DataHub_tables = () => {
  return (
    <>
      <Breadcrumb pageName="Dataset Details" buttonName="Upload Dataset" />

      <div className="flex flex-col gap-10">
        <Datasets />
      </div>
    </>
  );
};

export default DataHub_tables;
