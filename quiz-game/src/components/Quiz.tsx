import React, { useEffect, useState } from 'react';
import { QuizProps } from '../types';
import Question from './Question';

import Result from './Result';

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [activeButton, setActiveButton] = useState(9)


  function handleAnswer  (answer: string )  {
    // activeButton: number
    
      if (answer === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
  
      if (currentQuestionIndex < questions.length - 1) {
        
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setActiveButton(9)
      } else {
        setShowResult(true);
      }
      
      
    };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setActiveButton(9);
  };

  return (
    <div className='bg-red-900'>
      {showResult ? (
        <Result score={score} total={questions.length} onRetry={handleRetry} />
      ) : (
        <Question question={questions[currentQuestionIndex]} onAnswer={handleAnswer} setButton={setActiveButton} activeButton={activeButton}/>
      )}
    </div>
  );
};

export default Quiz;
