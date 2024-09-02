import React, { useState } from 'react';
import { QuestionProps } from '../types';

const Question: React.FC<QuestionProps> = ({ question, onAnswer, setButton, activeButton}) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);


  const handleButtonClick = (index:number) =>{
   
       setSelectedButton(index);
       onAnswer(question.options[index]);
       setTimeout(() => {
        setSelectedButton(null); // Reset the active button
      }, 10);
  }

  return (
    <div className=' m-4  flex-col md:m-4 md:flex-col'>
      <h2 className='pl-5 text-4xl pb-10 text-white text-center mb-8 font-semibold md:pl-5 md:text-3xl md:text-black md:text-center  md:font-semibold'>{question.question}</h2>
      <div className=' items-center justify-center flex  md:bg-white'> 

      <ul className='m-auto grid grid-cols-2 gap-8 h-fit place-items-center md:m-auto md:grid md:grid-cols-2 md:gap-4 md:place-items-center'>
        {question.options.map((option, index) => (
      
          <li className='' key={index}>
            
            <div className='bg-red-950 p-1  md:bg-red-950 md:p-1'>
            <button
                  className={selectedButton === index ? 'bg-black w-48 h-36 md:bg-black md:w-96 md:h-20' : 'bg-red-400 w-48 h-36 text-white md:bg-red-400 md:w-96 md:h-20 md:text-white'}
                  onClick={() => handleButtonClick(index)}
                >
              <h1 className= {activeButton === index? 'text-4xl text-center  text-white md:text-2xl md:text-center md:ml-5 md:text-white' : 'text-3xl text-center  text-white md:text-2xl md:text-center md:ml-5 md:text-white'}>{option}</h1>
            </button></div>
          </li>
        ))}
      </ul></div>
   </div>
  );
};

export default Question;
