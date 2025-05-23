const PhraseBlock = ({ phrase, meaning, usage }) => (
    <div className="bg-scandi.accent border-l-4 border-scandi.primary p-3 my-2 rounded">
        <h4 className="font-bold text-scandi.primary">{phrase}</h4>
        <p className="text-scandi.text">{meaning}</p>
        <p className="text-sm text-scandi.secondary mt-1 italic">Usage: {usage}</p>
    </div>
);
