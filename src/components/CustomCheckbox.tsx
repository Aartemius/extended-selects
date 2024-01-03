import { FC } from 'react';
interface CustomCheckboxProps {
  isChecked: boolean;
}

const classes = ['select__custom-checkbox', 'select__custom-checkbox_selected'];

const CustomCheckbox: FC<CustomCheckboxProps> = ({ isChecked }) => {
  return <div className={isChecked ? classes.join(' ') : classes[0]}>
    {isChecked && 
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L3.5 6.5L1 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    }
    </div>;
};

export default CustomCheckbox;
