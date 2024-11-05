import React, { useState } from 'react';

const SelectGroupTwo: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div>
      <div className="rounded-sm mb-0 p-1 relative  ">
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
          }}
          //style={{ width: '400px' }} // Custom width
          style={{ width: '300px',  height: '35px', fontSize: '15px', padding: '5px' }}
          className={`
            rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white
                  ${  isOptionSelected ? 'text-black dark:text-white' : '' }`
                }

        >
          <option value="" disabled className="text-body dark:text-bodydark">
            Select File
          </option>

          <option value="Data_id1" className="text-body dark:text-bodydark">
            Data_id1
          </option>
          <option value="Data_id1" className="text-body dark:text-bodydark">
            Data_id1
          </option>
          <option value="Data_id1" className="text-body dark:text-bodydark">
            Data_id1
          </option>
        </select>

      </div>
    </div>
  );
};

export default SelectGroupTwo;
