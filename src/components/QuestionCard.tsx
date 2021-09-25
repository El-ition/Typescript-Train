import React, { FC } from 'react';

import { AnswerObject } from '../App';

import { ButtomWrapper, Wrapper } from './QuestionCard.styles';

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
    <Wrapper>
      <p className="number">
        Qestion: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((ans) => (
          <ButtomWrapper
            key={ans}
            correct={userAnswer?.correctAnswer === ans}
            userClicked={userAnswer?.correctAnswer === ans}
          >
            <button
              disabled={userAnswer ? true : false}
              value={ans}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: ans }}></span>
            </button>
          </ButtomWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
