
import React, { useState } from 'react';
import Header from '../components/Header';
import type { CBTQuestion } from '../types';

const mockQuestions: CBTQuestion[] = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is 2 + 2 * 2?",
    options: ["6", "8", "4", "10"],
    correctAnswer: "6",
  },
   {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    correctAnswer: "William Shakespeare",
  },
];

const CBT: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const handleNext = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };
  
  const resetTest = () => {
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setShowResults(false);
  }

  const calculateScore = () => {
    return mockQuestions.reduce((score, question, index) => {
      return selectedAnswers[index] === question.correctAnswer ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / mockQuestions.length) * 100;
    return (
        <div>
            <Header title="Exam Results" />
            <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-lg mx-auto">
                <img src="https://cdn-icons-png.flaticon.com/512/2919/2919634.png" alt="Trophy" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800">Test Completed!</h3>
                <p className="mt-4 text-lg text-gray-600">You scored</p>
                <p className="text-6xl font-bold text-indigo-600 my-4">{score} / {mockQuestions.length}</p>
                <div className="w-full bg-gray-200 rounded-full h-4 my-4">
                    <div className="bg-green-500 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
                <p className="font-semibold">{percentage.toFixed(2)}%</p>
                <button 
                    onClick={resetTest}
                    className="mt-8 py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Retake Test
                </button>
            </div>
        </div>
    );
  }

  const currentQuestion = mockQuestions[currentQuestionIndex];

  return (
    <div>
      <Header title="Computer Based Test" />
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
        <div className="mb-4">
            <p className="text-sm text-gray-500">Question {currentQuestionIndex + 1} of {mockQuestions.length}</p>
            <h3 className="text-2xl font-semibold text-gray-800 mt-2">{currentQuestion.question}</h3>
        </div>
        <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
                <label key={index} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${selectedAnswers[currentQuestionIndex] === option ? 'bg-indigo-100 border-indigo-500 ring-2 ring-indigo-300' : 'border-gray-300 hover:bg-gray-50'}`}>
                    <input 
                        type="radio" 
                        name="option" 
                        value={option}
                        checked={selectedAnswers[currentQuestionIndex] === option}
                        onChange={() => handleAnswerSelect(option)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-4 text-lg text-gray-700">{option}</span>
                </label>
            ))}
        </div>
        <div className="flex justify-between mt-8">
            <button 
                onClick={handlePrevious} 
                disabled={currentQuestionIndex === 0}
                className="py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
            </button>
            {currentQuestionIndex === mockQuestions.length - 1 ? (
                 <button 
                    onClick={handleSubmit} 
                    className="py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                    Submit
                </button>
            ) : (
                <button 
                    onClick={handleNext}
                    className="py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Next
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default CBT;