export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  export interface QuizProps {
    questions: Question[];
  }
  
  export interface QuestionProps {
    question: Question;
    onAnswer: (answer: string) => void;
  }
  
  export interface ResultProps {
    score: number;
    total: number;
    onRetry: () => void;
  }
   