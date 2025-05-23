import IntroCard from '../../components/common/IntroCard';
import { Quote } from 'lucide-react';

const quotes = [
    'To be, or not to be, that is the question.',
    'All that glitters is not gold.',
];

const Quotes = () => (
    <div className="p-6 bg-[#FDF6E3] text-[#5B4636] font-serif">
        <IntroCard
            title="Timeless Wisdom"
            summary="Antique-style quotes to ponder and appreciate."
            Icon={Quote}
        />

        <div className="space-y-6">
            {quotes.map((q, i) => (
                <blockquote key={i} className="border-l-4 border-[#D6A25E] pl-4 italic text-lg">
                    “{q}”
                </blockquote>
            ))}
        </div>
    </div>
);

export default Quotes;
