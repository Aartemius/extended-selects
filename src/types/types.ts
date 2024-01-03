export type OptionType = {
  id: number;
  name: string;
};

export type AnswersProps = {
  index: number;
  answer: number;
};

export type UpdateAnswers = (selectNumber: number, answer: number) => void;
