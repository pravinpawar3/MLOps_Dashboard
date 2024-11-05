import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  pageName: string;
  buttonName?: string; // Make buttonName optional
}

const Breadcrumb = ({ pageName, buttonName }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between relative">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      {/* Conditionally render the Upload Button */}
      {buttonName && (
        <Link
          className="absolute right-0 transform translate-x-1/2 translate-y-1 mt-1 justify-center rounded-md bg-primary py-2 px-8 text-center font-medium text-white hover:bg-opacity-90 lg:px-2 xl:px-3"
          to="/ui/buttons"
          style={{ right: '14%', transform: 'translateX(50%)' }} // Adjust as needed
        >
          {buttonName}
        </Link>
      )}

      {/*
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
      */}
    </div>
  );
};

export default Breadcrumb;
