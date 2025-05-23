import { cn } from 'classnames';

const IntroCard = ({ title, summary, Icon, theme = 'light' }) => {
    const isDark = theme === 'dark';
    return (
        <div className={cn(
            'rounded-2xl p-5 flex items-start gap-4 shadow-md mb-6 transition-all',
            isDark ? 'bg-gray-800 text-white' : 'bg-scandi.surface text-scandi.text'
        )}>
            <div className={cn('p-2 rounded-full', isDark ? 'bg-gray-700' : 'bg-scandi.accent')}>
                <Icon size={32} strokeWidth={1.5} />
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-1">{title}</h2>
                <p className="text-sm opacity-80">{summary}</p>
            </div>
        </div>
    );
};
