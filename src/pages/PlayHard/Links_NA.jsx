import IntroCard from '../../components/common/IntroCard';
import { Link2 } from 'lucide-react';

const Links = () => (
    <div className="p-4">
        <IntroCard
            title="Curated Resources"
            summary="Helpful links for learning, tools, and fun — carefully selected for you."
            Icon={Link2}
        />
        {/* Render <LinkBlock /> */}
    </div>
);
