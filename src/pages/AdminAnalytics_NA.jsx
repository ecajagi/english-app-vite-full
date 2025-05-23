// pages/AdminAnalytics.jsx
import React, { useState } from 'react';
import { getMostIncorrectQuestions, getMostVisitedTopics } from '../analytics/quizAnalytics';
import { useAuth } from '../auth/useAuth';

const AdminAnalytics = ({ tests }) => {
    const { user } = useAuth();
    const [selectedTopic, setSelectedTopic] = useState(tests[0]?.topic || '');

    if (!user || !user.isAdmin) return null;

    const incorrectData = getMostIncorrectQuestions(selectedTopic);
    const visitsData = getMostVisitedTopics();

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Quiz Analytics Dashboard</h1>

            <div className="mb-6">
                <label className="mr-2 font-medium">Select Test Topic:</label>
                <select
                    className="border p-2 rounded"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                >
                    {tests.map((test) => (
                        <option key={test.topic} value={test.topic}>
                            {test.topic}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Most Incorrect Questions</h2>
                    <ul className="list-disc pl-5">
                        {incorrectData.map((q, index) => (
                            <li key={index}>
                                Question #{q.questionIndex + 1}: {q.incorrect} incorrect, {q.correct} correct
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-2">Most Visited Topics</h2>
                    <ul className="list-disc pl-5">
                        {visitsData.map(([topic, count], index) => (
                            <li key={index}>
                                {topic}: {count} visits
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalytics;
/* This section should show top 6 questions people got wrong

you can do next:

Call recordAnswer(topic, questionIndex, isCorrect) whenever a quiz question is answered.

Call recordTopicVisit(topic) when a grammar topic page is opened.

Use getMostIncorrectQuestions(topic) and getMostVisitedTopics() to analyze user interaction.
*/