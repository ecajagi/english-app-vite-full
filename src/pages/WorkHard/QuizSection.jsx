// src/pages/WorkHard/QuizSection.jsx
import { useState } from 'react';
import { BrainCircuit } from 'lucide-react'; // Ensure BrainCircuit is imported if used
import IntroCard from '../../components/IntroCard';
import QuizBlock from '../../components/QuizBlock';

// Sample Data Structure (You would eventually fetch this or import from a JSON file)
const SAMPLE_QUIZ_DATA = {
  quizLevels: [
    {
      id: "elementary",
      name: "Elementary",
      description: "Test your foundational grammar and vocabulary.",
      quizzes: [
        {
          id: "elem-grammar-1",
          title: "Basic Grammar: Test 1",
          questionCount: 2,
          description: "Focuses on 'to be' and simple present.",
          questions: [
            {
              id: "eg1-q1",
              questionText: "Which sentence is correct?",
              options: [ /* ... options ... */ { id: "B", text: "She is a doctor." } ],
              correctOptionId: "B"
            },
            {
              id: "eg1-q2",
              questionText: "What is the plural of 'cat'?",
              options: [ /* ... options ... */ { id: "C", text: "Cats" } ],
              correctOptionId: "C"
            }
          ]
        },
        {
          id: "elem-vocab-1",
          title: "Basic Vocabulary: Test 1",
          questionCount: 1,
          description: "Common words for everyday situations.",
          questions: [
            {
              id: "ev1-q1",
              questionText: "Which word means 'very happy'?",
              options: [ /* ... options ... */ { id: "C", text: "Joyful" } ],
              correctOptionId: "C"
            }
          ]
        }
      ]
    }
    // You can add more levels (e.g., "intermediate") here
  ]
};

const QuizSection = () => {
    const [selectedLevel, setSelectedLevel] = useState(null); // Stores the ID of the selected level
    const [selectedQuizId, setSelectedQuizId] = useState(null); // Stores the ID of the selected quiz
    const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]); // Stores questions of the active quiz

    // Find the currently selected level's data
    const currentLevelData = selectedLevel
        ? SAMPLE_QUIZ_DATA.quizLevels.find(l => l.id === selectedLevel)
        : null;

    return (
        <div className="bg-gray-900 min-h-screen text-white p-6">
            {currentQuizQuestions && currentQuizQuestions.length > 0 ? (
                // View 1: A specific quiz is active, show QuizBlock
                <div>
                    <QuizBlock questionData={currentQuizQuestions[0]} /> {/* Shows the first question */}
                    <button
                        onClick={() => {
                            setSelectedQuizId(null); // Go back to current level's quiz list
                            setCurrentQuizQuestions([]);
                        }}
                        className="mt-6 text-indigo-400 hover:underline"
                    >
                        Back to Quiz List
                    </button>
                </div>
            ) : selectedLevel && currentLevelData ? (
                // View 2: A level is selected, show its list of quizzes
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">{currentLevelData.name} Quizzes</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {currentLevelData.quizzes.map((quiz) => (
                            <div
                                key={quiz.id}
                                className="bg-gray-800 hover:bg-gray-700 cursor-pointer p-4 rounded shadow"
                                onClick={() => {
                                    setSelectedQuizId(quiz.id);
                                    setCurrentQuizQuestions(quiz.questions);
                                }}
                            >
                                <h4 className="text-lg font-semibold">{quiz.title}</h4>
                                <p className="text-sm text-gray-400">{quiz.description || `${quiz.questionCount} questions`}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => {
                            setSelectedLevel(null); // Go back to level selection
                            setSelectedQuizId(null);
                            setCurrentQuizQuestions([]);
                        }}
                        className="mt-6 text-indigo-400 hover:underline"
                    >
                        Back to Level Selection
                    </button>
                </div>
            ) : (
                // View 3: No level selected, show list of available levels
                <div>
                    <IntroCard
                        title="English Level Quizzes"
                        summary="Challenge your grammar, vocabulary, and comprehension skills."
                        Icon={BrainCircuit}
                        theme="dark"
                    />
                    <div className="grid md:grid-cols-3 gap-4 mt-8">
                        {SAMPLE_QUIZ_DATA.quizLevels.map((level) => (
                            <div
                                key={level.id}
                                className="cursor-pointer bg-gray-800 hover:bg-indigo-700 p-6 rounded text-center shadow"
                                onClick={() => {
                                    setSelectedLevel(level.id);
                                    // Reset quiz states when a new level is picked
                                    setSelectedQuizId(null);
                                    setCurrentQuizQuestions([]);
                                }}
                            >
                                <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                                <p className="text-sm text-gray-300">{level.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizSection;
