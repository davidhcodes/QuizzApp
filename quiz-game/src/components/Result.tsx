import React from 'react';
import { ResultProps } from '../types';

const Result: React.FC<ResultProps> = ({ score, total, onRetry }) => {
  return (
    <div className='bg-white p-10 m-2'>
      <h2 className='text-3xl'>Your Score: {score} / {total}</h2>
      <button className='bg-red-700 p-5 mt-5' onClick={onRetry}>Retry</button>
    </div>
  );
};

export default Result;
