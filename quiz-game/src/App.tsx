import React from 'react';
import Quiz from './components/Quiz';
import { Question } from './types';

const questions: Question[] = [
  {
    question: 'How many inches in a foot?',
    options: ['12', '13', '10', '15'],
    answer: '12'
  },
  {
    question: 'Which is not a prime number?',
    options: ['1', '2', '5', '7'],
    answer: '1'
  },
  // Add more questions as needed
];

const App: React.FC = () => {
  return (
    <div className="bg-red-900 min-w-full min-h-screen  ">
      <h1 className='text-white text-7xl text-center p-10'>Quiz Game</h1>
      <Quiz questions={questions} />
    </div>
  );
};

export default App;
