import React, { useState } from 'react';

// Expected structure for questionData prop:
// {
//   id: "unique-question-id",
//   questionText: "The question itself...",
//   options: [
//     { id: "A", text: "Option A Text" },
//     { id: "B", text: "Option B Text" },
//     { id: "C", text: "Option C Text" },
//     { id: "D", text: "Option D Text" }
//   ],
//   correctOptionId: "B" 
// }

const QuizBlock = ({ questionData }) => {
  if (!questionData) {
    return <p>No question data provided.</p>;
  }

  const { questionText, options, correctOptionId } = questionData; // Destructure correctOptionId
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-gray-800">
      <h2 className="text-2xl font-semibold mb-4">{questionText}</h2>
      <div className="space-y-3">
        {options.map((option) => {
          const isCorrect = correctOptionId === option.id; // Use destructured correctOptionId
          
          // Base classes for all options
          let optionClasses = "p-3 rounded-md border border-gray-300";

          if (showAnswer) {
            if (isCorrect) {
              optionClasses += " bg-green-200 border-green-500 text-green-800 font-semibold"; // Correct and revealed
            } else {
              optionClasses += " bg-gray-100"; // Incorrect and revealed (neutral style)
            }
          } else {
            optionClasses += " bg-gray-100 hover:bg-gray-200 cursor-pointer"; // Not revealed yet, hover effect
          }

          return (
            <div
              key={option.id}
              className={optionClasses}
            >
              <span className="font-medium mr-2">{option.id}.</span>
              {option.text}
              {showAnswer && isCorrect && <span className="ml-2 text-sm font-normal text-green-700">(Correct Answer)</span>}
            </div>
          );
        })}
      </div>
      
      {!showAnswer && ( // Only show the button if the answer hasn't been revealed yet
        <button
          onClick={() => setShowAnswer(true)}
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Show Correct Answer
        </button>
      )}
    </div>
  );
};

export default QuizBlock;
