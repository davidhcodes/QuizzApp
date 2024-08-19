import React from 'react';
import { ResultProps } from '../types';

const Result: React.FC<ResultProps> = ({ score, total, onRetry }) => {
  return (
    <div className='bg-slate-700'>
      <h2>Your Score: {score} / {total}</h2>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
};

export default Result;
