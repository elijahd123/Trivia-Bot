export type QuestionType = 'multiple' | 'boolean';

export type OpenTDBQuestions = {
  category: string;
  type: 'boolean' | 'multiple';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
};
