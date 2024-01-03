import './App.scss';
import Select from './components/Select';
import { setAnswers } from './features/mainSlice';
import { useAppDispatch, useAppSelector } from './hook';
import { UpdateAnswers } from './types/types';

function App() {
  const dispatch = useAppDispatch();
  const { selects, answers } = useAppSelector((state) => state.main);
  const defaultTitle = 'Виберіть варіант';

  const updateAnswers: UpdateAnswers = (selectNumber, answer) => {
    dispatch(setAnswers({ index: selectNumber, answer: answer }));
  };

  return (
    <div className="App">
      {selects.map((select, index) => {
        return (
          answers.length + 1 > index && (
            <Select
              key={index}
              optionsList={select}
              answers={answers}
              updateAnswers={updateAnswers}
              selectIndex={index}
              defaultTitle={defaultTitle}
            />
          )
        );
      })}
    </div>
  );
}

export default App;
