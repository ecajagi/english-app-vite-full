// 2. pages/work/Grammar.jsx
import IntroCard from '../../components/common/IntroCard';
import { BookOpenCheck, HelpCircle, Info, ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const grammarSections = Array.from({ length: 8 }, (_, i) => ({
    title: `Grammar Topic ${i + 1}`,
    description: '',
}));

const HeadingBlock = ({ children }) => (
    <h3 className="text-2xl font-bold text-gray-200 mb-2 mt-6">{children}</h3>
);

const TextBlock = ({ children }) => (
    <p className="text-sm text-gray-300 leading-relaxed mb-4">{children}</p>
);

const QABox = ({ question, answer }) => (
    <div className="bg-gray-700 p-4 rounded-lg border-l-4 border-indigo-500 mb-4">
        <p className="font-semibold">Q: {question}</p>
        <p className="mt-1">A: {answer}</p>
    </div>
);

const Grammar = () => {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <div className="p-6">
                <IntroCard
                    title="Master English Grammar"
                    summary="Clear rules with practical examples and challenges."
                    Icon={BookOpenCheck}
                    theme="dark"
                    footerText="Contact: hello@languageapp.com"
                />

                <div className="text-center py-24 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
                        Teaching and learning are lifelong journeys that empower us all.
                    </h2>
                </div>

                <div className="flex justify-center mb-8">
                    <button onClick={scrollToSection} className="animate-bounce text-indigo-400 hover:text-indigo-200">
                        <ChevronDown size={32} />
                    </button>
                </div>

                <div ref={sectionRef} className="grid md:grid-cols-3 gap-4 px-4">
                    <div onClick={() => window.location.href = '#grammar'}
                        className="cursor-pointer hover:bg-gray-800 p-4 rounded text-center transition">
                        <HelpCircle className="mx-auto mb-2 text-indigo-300" />
                        <span className="text-sm">Grammar Sections</span>
                    </div>
                    <div onClick={() => window.location.href = '#examples'}
                        className="cursor-pointer hover:bg-gray-800 p-4 rounded text-center transition">
                        <Info className="mx-auto mb-2 text-yellow-300" />
                        <span className="text-sm">Examples with Answers</span>
                    </div>
                    <div onClick={() => window.location.href = '#tips'}
                        className="cursor-pointer hover:bg-gray-800 p-4 rounded text-center transition">
                        <BookOpenCheck className="mx-auto mb-2 text-green-300" />
                        <span className="text-sm">Grammar Tips</span>
                    </div>
                </div>

                <div id="grammar" className="mt-12 px-6">
                    {grammarSections.map((section, idx) => (
                        <div key={idx} className="bg-gray-800 p-5 rounded-lg mb-6">
                            <HeadingBlock>{section.title}</HeadingBlock>
                            <TextBlock>{section.description || 'Coming soon...'}</TextBlock>
                            <QABox question="What is the present perfect?" answer="A tense showing action completed recently or relevant to now." />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Grammar;
