import { shuffleArray } from './util';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum diff {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: diff) => {
  const res = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;
  const data = await (await fetch(res)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
