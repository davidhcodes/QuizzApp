import React from 'react';
import { QuestionProps } from '../types';

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className='bg-white'>
      <h2 className='pl-5 text-3xl'>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li className='' key={index}>
            <button className='bg-red-400 p-5 pr-10 ml-5 m-2' onClick={() => onAnswer(option)}>
              <h1 className='text-2xl text-center ml-5'>{option}</h1>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
