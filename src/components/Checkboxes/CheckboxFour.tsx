import { useState } from 'react';
import Button from '../../UiElements/Button.svg';

interface CheckboxFourProps {
  label: string; // Type for the label prop
  onChange: (checked: boolean) => void; // Type for the onChange prop
}

const CheckboxFour = ({ label,isChecked, onChange }: CheckboxFourProps) => {

  const handleChange = () => {
    onChange(!isChecked); // Pass the new checked state to the parent
  };

  return (
    <div>
      <label
        htmlFor="checkboxLabelFour"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative"  >
          <input
            type="checkbox"
            id="checkboxLabelFour"
            className="sr-only"
            onChange={handleChange} // Use the handleChange method
           checked={!isChecked} // Reflect the checked state from props
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
              isChecked && 'border-primary'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                isChecked && '!bg-primary'
              }`}
            >
              {' '}
            </span>
          </div>
        </div>
        {label}
      </label>
    </div>
  );
};

export default CheckboxFour;
