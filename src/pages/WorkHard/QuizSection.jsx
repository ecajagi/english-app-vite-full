// pages/work/Quiz.jsx
import { useState } from 'react';
import { BrainCircuit } from 'lucide-react';
import IntroCard from '../../components/IntroCard';
import QuizBlock from '../../components/QuizBlock';

const levels = ['Elementary', 'Intermediate', 'Upper-Intermediate'];

const QuizSection = () => {
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedQuizId, setSelectedQuizId] = useState(null);
    const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);

    return (
        <div className="bg-gray-900 min-h-screen text-white p-6">
            <IntroCard
                title="English Level Quizzes"
                summary="Challenge your grammar, vocabulary, and comprehension skills."
                Icon={BrainCircuit}
                theme="dark"
                footerText="Contact: hello@languageapp.com"
            />

            {!selectedLevel ? (
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                    {levels.map((level) => (
                        <div
                            key={level}
                            className="cursor-pointer bg-gray-800 hover:bg-indigo-700 p-6 rounded text-center shadow"
                            onClick={() => setSelectedLevel(level)}
                        >
                            <h3 className="text-xl font-bold mb-2">{level}</h3>
                            <p className="text-sm text-gray-300">10 quizzes, 30+ questions each</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">{selectedLevel} Quizzes</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[...Array(10)].map((_, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-800 hover:bg-gray-700 cursor-pointer p-4 rounded shadow"
                                onClick={() => window.location.href = `/quiz/${selectedLevel.toLowerCase()}-${idx + 1}`}
                            >
                                <h4 className="text-lg font-semibold">Test {idx + 1}</h4>
                                <p className="text-sm text-gray-400">30 questions</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => setSelectedLevel(null)}
                        className="mt-6 text-indigo-400 hover:underline"
                    >
                        Back to level selection
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizSection;
