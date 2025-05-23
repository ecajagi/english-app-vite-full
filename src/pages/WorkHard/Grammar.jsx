import IntroCard from '../../components/common/IntroCard';
import { BookOpenCheck } from 'lucide-react';

const grammarSections = Array.from({ length: 8 }, (_, i) => ({
    title: `Grammar Topic ${i + 1}`,
    description: '',
}));

const Grammar = () => (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
        <IntroCard
            title="Master English Grammar"
            summary="Clear rules with practical examples and challenges."
            Icon={BookOpenCheck}
            theme="dark"
        />

        {grammarSections.map((section, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-lg mb-2">{section.title}</h3>
                <p className="mb-2">{section.description || 'Coming soon...'}</p>
                <div className="bg-gray-700 p-3 rounded mt-2">
                    <p><strong>Example:</strong> "I have been working all day."</p>
                    <p className="mt-1 italic">Q: What tense is used here? <br /> A: Present perfect continuous.</p>
                </div>
            </div>
        ))}
    </div>
);

export default Grammar;