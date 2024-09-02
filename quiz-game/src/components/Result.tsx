import React from 'react';
import { ResultProps } from '../types';

const Result: React.FC<ResultProps> = ({ score, total, onRetry }) => {
  return (
    <div className='bg-white p-10 m-6 flex flex-col items-center'>
      <h2 className='text-5xl text-center pb-2'>Score: {score} / {total}</h2>
      {((score/total)<0.5) ? <h2 className='text-2xl text-black'> Unlucky, try again!</h2>: <h2 className='text-2xl text-black'> Great job!</h2>}

      <button className='bg-red-700 p-5 mt-5 w-36  ' onClick={onRetry}><h1 className='text-white text-3xl font-semibold'>Retry</h1></button>

    </div>
  );
};

export default Result;
