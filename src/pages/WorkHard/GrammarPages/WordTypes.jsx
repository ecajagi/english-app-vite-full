import React from 'react';

const WordTypes = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-800">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8">Word Types</h1>

      <div className="mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Text Explanation</h2>
        <p className="text-lg leading-relaxed">
          Placeholder for a detailed explanation of different Word Types (nouns, verbs, adjectives, etc.). This section will cover their definitions, functions, and examples.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Q&A</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-700">Question 1: What are the main categories of word types?</h3>
            <p className="text-lg text-gray-600 mt-1">Answer: Placeholder for the answer.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Question 2: Give an example of an adverb modifying a verb.</h3>
            <p className="text-lg text-gray-600 mt-1">Answer: Placeholder for the answer.</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Image Placeholder</h2>
        <div className="w-full h-64 bg-gray-300 rounded-md flex items-center justify-center">
          <p className="text-gray-500 text-xl">Image related to Word Types will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default WordTypes;
