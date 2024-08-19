import React from 'react';
import { QuestionProps } from '../types';

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswer(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
