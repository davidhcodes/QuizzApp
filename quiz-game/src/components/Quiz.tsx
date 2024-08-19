import React, { useState } from 'react';
import { QuizProps } from '../types';
import Question from './Question';
import Result from './Result';

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className='bg-pink-900'>
      {showResult ? (
        <Result score={score} total={questions.length} onRetry={handleRetry} />
      ) : (
        <Question question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
      )}
    </div>
  );
};

export default Quiz;
