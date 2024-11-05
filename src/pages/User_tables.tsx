import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UserData from '../components/Tables/UserData';

/*
  User Tables component:
  - Manages add, update, delete, or download user profile
*/
const User_tables = () => {
  return (
    <>
     <Breadcrumb pageName="Users" buttonName="Create New User" />

      <div className="flex flex-col gap-10">
        <UserData />
      </div>
    </>
  );
};

export default User_tables;
