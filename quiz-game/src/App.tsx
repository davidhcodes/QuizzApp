import React, { useState } from 'react';
import Quiz from './components/Quiz';
import { Question } from './types';
import QuizPage from './QuizPage';


const App: React.FC = () => {
  const [startQuiz, setStartQuiz] = useState(false);

const startTheQuiz = () =>{
  setStartQuiz(true)
}

  return (
    <div className="bg-red-900 min-w-full min-h-screen items-center justify-center flex  md:bg-red-900 md:min-w-full md:min-h-screen  ">
      {/* <h1 className='text-white text-7xl text-center p-10'>Quiz Game</h1> */}
    {startQuiz? <QuizPage  />: <div className='flex flex-col items-center justify-center gap-10 md:flex  md:flex-col  md:items-center  md:justify-center'><h1 className='text-5xl text-center text-white md:text-5xl md:text-center md:text-white'> Welcome to the quiz</h1> <button onClick={startTheQuiz} className='bg-red-950 p-4 rounded-xl w-1/2 md:bg-red-950 md:p-4 md:rounded-xl md:w-1/2'> <h1 className='text-white text-3xl md:text-white md:text-3xl'> Click to start </h1></button></div> }  
    </div>
  );
};

export default App;
