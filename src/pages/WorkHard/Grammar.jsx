import IntroCard from '../../components/IntroCard';
import { BookOpenCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const grammarTopics = [
  { title: "Pronouns", path: "/work/grammar/pronouns", description: "Learn about different types of pronouns and their uses." },
  { title: "Tenses", path: "/work/grammar/tenses", description: "Understand the different verb tenses and their applications." },
  { title: "Modal Verbs", path: "/work/grammar/modal-verbs", description: "Learn about modal auxiliary verbs and their functions." },
  { title: "Question Forming & WH-Questions", path: "/work/grammar/question-forming", description: "Master how to form questions and use WH-questions." }
  // More topics will be added here later
];

const Grammar = () => (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
        <IntroCard
            title="Master English Grammar"
            summary="Clear rules with practical examples and challenges."
            Icon={BookOpenCheck}
            theme="dark"
        />

        {grammarTopics.map((topic, idx) => (
            <Link to={topic.path} key={idx} className="block bg-gray-800 p-4 rounded-lg mb-4 hover:bg-gray-700 transition-colors">
                <h3 className="font-bold text-lg text-indigo-400 mb-2">{topic.title}</h3>
                <p className="text-gray-300">{topic.description}</p>
            </Link>
        ))}
    </div>
);

export default Grammar;