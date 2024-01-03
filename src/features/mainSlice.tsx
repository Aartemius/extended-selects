import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OptionType, AnswersProps } from '../types/types';

type stateType = {
  answers: number[];
  selects: OptionType[][];
};

const initialSelectOptions = [
  { id: 1, name: 'Варіант 1' },
  { id: 2, name: 'Варіант 2' },
  { id: 3, name: 'Варіант 3' },
  { id: 4, name: 'Варіант 4' },
  { id: 5, name: 'Варіант 5' },
  { id: 6, name: 'Варіант 6' },
];

const storageData = JSON.parse(sessionStorage.getItem('answers') || '[]');
const initSelects = storageData.map(() => {
  return [...initialSelectOptions];
});

const initialState: stateType = {
  answers: storageData,
  selects: [...initSelects, [...initialSelectOptions]],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setAnswers: (state, action: PayloadAction<AnswersProps>) => {
      state.answers[action.payload.index] = action.payload.answer;
      sessionStorage.setItem('answers', JSON.stringify(state.answers));
      state.selects = [...state.selects, [...initialSelectOptions]];
    },
  },
});

export const { setAnswers } = mainSlice.actions;
export default mainSlice.reducer;
