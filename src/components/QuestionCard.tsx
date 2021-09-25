import React, { FC } from 'react';

import { AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
  questionNum: number;
  totalQuestions: number;
};
const QuestionCard: FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Qestion: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((ans) => (
          <div key={ans}>
            <button disabled={!!userAnswer} value={ans} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: ans }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
