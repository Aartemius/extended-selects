import { 
  FC, 
  useEffect, 
  useState 
} from 'react';
import { OptionType, UpdateAnswers } from '../types/types';
import './Select.scss';
import CustomCheckbox from './CustomCheckbox';

interface SelectProps {
  optionsList: OptionType[];
  answers: number[];
  updateAnswers: UpdateAnswers;
  selectIndex: number;
  defaultTitle: string;
}

const Select: FC<SelectProps> = ({ 
  optionsList, 
  answers, 
  updateAnswers, 
  selectIndex, 
  defaultTitle 
}) => {
  const [defaultSelectTitle, setDefaultSelectTitle] = useState(defaultTitle);
  const [showOptionList, setShowOptionList] = useState(false);
  const [localAnswer, setLocalAnswer] = useState('');

  const optionsListChecked = optionsList.map((option) => {
    return {
      ...option,
      checked: option.id === answers[selectIndex],
    };
  });

  const [options, setOptions] = useState(optionsListChecked);

  useEffect(() => {
    const currentAnswers = answers.slice(0, selectIndex + 1);
    if (answers.length > selectIndex) setDefaultSelectTitle('Варіант ' + currentAnswers.join('-'));
  }, [localAnswer, answers, selectIndex]);

  const handleListDisplay = () => {
    setShowOptionList((prevState) => !prevState);
  };

  const handleOptionClick = (name: string, id: number) => {
    setShowOptionList(false);
    setLocalAnswer(name);
    updateAnswers(selectIndex, id);
    setOptions((prevState) =>
      prevState.map((option) => {
        if (id !== option.id) {
          return {
            ...option,
            checked: false,
          };
        }
        return {
          ...option,
          checked: true,
        };
      }),
    );
  };

  return (
    <div className="select">
      <div className="select__area"></div>
      <div className={showOptionList ? 'select__wrap active' : 'select__wrap'}>
        <div className="select__selected-text" onClick={handleListDisplay}>
          <span>{defaultSelectTitle}</span>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41 0.294998L6 4.875L10.59 0.294998L12 1.705L6 7.705L0 1.705L1.41 0.294998Z" fill="#2C7DFA" />
          </svg>
        </div>
        {showOptionList && (
          <ul className="select__options">
            {options.map((option) => {
              return (
                <li
                  className="select__options-item"
                  data-name={option.name}
                  key={option.id}
                  onClick={() => handleOptionClick(option.name, option.id)}
                >
                  <CustomCheckbox isChecked={option.checked} />
                  <label>{option.name}</label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
