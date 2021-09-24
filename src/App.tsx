import React, { useState } from 'react';
import { diff, fetchQuizQuestions } from './API';
import QuestionCard from './components/QuestionCard';

const TOTAL = 20;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  fetchQuizQuestions(TOTAL, diff.HARD);
  const handleStartQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const handleNextQuestion = () => {};
  return (
    <div className="app">
      <h1>Quiz</h1>
      <button onClick={handleStartQuiz} className="start">
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questin</p>
      {/* <QuestionCard
      questionNum={number + 1}
      totalQuestions={TOTAL}
      question={questions[number].question}
      answers={questions[number].answer}
      userAnswer={userAnswer ? userAnswer[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button className="next" onClick={handleNextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
