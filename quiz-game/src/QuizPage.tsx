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
  {
    question: 'What is the chemical symbol for the element gold?',
    options: ['Ag', 'Au', 'Pb', 'Fe'],
    answer: 'Au'
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['Charles Dickens', 'Mark Twain', 'William Shakespeare', 'Jane Austen'],
    answer: 'William Shakespeare'
  },
  {
    question: 'What is the capital city of Japan?',
    options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
    answer: 'Tokyo'
  },
  {
    question: 'In what year did the Titanic sink?',
    options: ['1905', '1912', '1918', '1925'],
    answer: '1912'
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Michelangelo', 'Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci'],
    answer: 'Leonardo da Vinci'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Saturn', 'Jupiter'],
    answer: 'Jupiter'
  },
  {
    question: 'Who was the first person to walk on the Moon?',
    options: ['Yuri Gagarin', 'Neil Armstrong', 'Buzz Aldrin', 'John Glenn'],
    answer: 'Neil Armstrong'
  },
  {
    question: 'What is the term for a word that is spelled the same forwards and backwards, like "radar"?',
    options: ['Anagram', 'Palindrome', 'Homophone', 'Synonym'],
    answer: 'Palindrome'
  },
  // Add more questions as needed
];

const QuizPage: React.FC = () => {
  return (
    <div className="bg-red-900 min-w-full min-h-screen items-center justify-center flex  md:bg-red-900 md:min-w-full md:min-h-screen  ">
      {/* <h1 className='text-white text-7xl text-center p-10'>Quiz Game</h1> */}
      <Quiz questions={questions} />
    </div>
  );
};

export default QuizPage;
