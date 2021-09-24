export enum diff {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (amount: number, difficulty: diff) => {
  const res = `https://opentdb.com/api.php?amount=${amount}&category=11&difficulty=${difficulty}`;
  const data = await (await fetch(res)).json();
  console.log(data);
};
