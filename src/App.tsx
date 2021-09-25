import React, { useState } from 'react';
import { diff, fetchQuizQuestions, QuestionState } from './API';
import { GlobalStyle, Wrapper } from './App.styles';
import QuestionCard from './components/QuestionCard';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL = 20;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(TOTAL, diff.HARD));

  const handleStartQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQues = await fetchQuizQuestions(TOTAL, diff.EASY);

    setQuestions(newQues);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    setLoading(false);
  };
  // console.log(questions);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore(score + 1);

      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((pre) => [...pre, answerObj]);
    }
  };

  const handleNextQuestion = () => {
    if (number === TOTAL) {
      setGameOver(true);
    } else {
      setNumber(number + 1);
    }
    console.log(number);
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper className="app">
        <h1>Quiz</h1>
        {gameOver || userAnswers.length === TOTAL ? (
          <button onClick={handleStartQuiz} className="start">
            Start
          </button>
        ) : null}

        {!gameOver && <p className="score">Score: {score}</p>}
        {loading && <p>Loading Questin</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL - 1 && (
            <button className="next" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
};

export default App;
