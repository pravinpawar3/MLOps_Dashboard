import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ModelData from '../components/Tables/ModelData';

/*
  Model Tables component:
  - Manages add, update, delete, or download user profile
*/
const Model_tables = () => {
  return (
    <>
      <Breadcrumb pageName="Model Details" buttonName="Upload Model" />
      <div className="flex flex-col gap-10">
        <ModelData />
      </div>
    </>
  );
};

export default Model_tables;
