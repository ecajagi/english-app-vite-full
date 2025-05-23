// 3. pages/work/Phrases.jsx
import IntroCard from '../../components/IntroCard';
import { MessageSquareQuote } from 'lucide-react';

const sections = ["Elementary", "Intermediate", "Advanced"];
const examples = {
    Elementary: ["Good morning!", "Thank you!"],
    Intermediate: ["Could you give me a hand?"],
    Advanced: ["I’d appreciate it if you could..."],
};

const comparisons = [
    ["I don't like it.", "I'm not a fan of it.", "It doesn't quite appeal to me."],
    ["Can you help me?", "Would you mind helping me?", "I’d appreciate your assistance."],
    ["I’m hungry.", "I could use a bite.", "I’m feeling rather peckish."],
    ["I'm tired.", "I'm a bit worn out.", "I'm utterly exhausted."],
    ["It's hot.", "It's quite warm today.", "The heat is rather intense."],
    ["I'm happy.", "I'm quite pleased.", "I'm absolutely delighted."],
    ["She is nice.", "She’s really kind.", "She’s exceptionally considerate."],
    ["I'm sorry.", "I apologize.", "Please accept my sincerest apologies."],
    ["It's okay.", "That's all right.", "It’s perfectly acceptable."],
    ["I'm busy.", "I’ve got a lot going on.", "I’m swamped with work."],
    ["I need help.", "I require assistance.", "I would appreciate some support."],
    ["It's good.", "It's quite decent.", "It's absolutely superb."],
    ["He's fast.", "He’s pretty quick.", "He’s remarkably swift."],
    ["I’m late.", "I lost track of time.", "I sincerely regret my delay."],
    ["She’s loud.", "She speaks loudly.", "Her voice carries noticeably."],
    ["It’s bad.", "It’s not ideal.", "It’s highly unfortunate."],
    ["Come here.", "Could you come over?", "Would you mind joining me here?"],
    ["Sit down.", "Please have a seat.", "Make yourself comfortable."],
    ["I forgot.", "It slipped my mind.", "It completely escaped me."],
    ["I'm cold.", "It’s chilly.", "There’s quite a nip in the air."],
    ["It’s fun.", "I enjoyed that.", "It was thoroughly entertaining."],
    ["She’s sad.", "She’s feeling down.", "She’s going through a rough patch."],
    ["That’s weird.", "That’s unusual.", "That’s rather peculiar."],
    ["I’m okay.", "I’m doing fine.", "I’m managing quite well, thank you."],
    ["He’s big.", "He’s pretty large.", "He’s exceptionally tall and broad."],
    ["It’s easy.", "That’s manageable.", "That’s relatively straightforward."],
    ["She’s smart.", "She’s intelligent.", "She’s exceptionally insightful."],
    ["It’s far.", "That’s quite a distance.", "It’s a considerable journey."],
    ["I’m scared.", "I’m nervous.", "I’m experiencing a bit of anxiety."],
    ["They left.", "They already went.", "They have departed earlier."],
];

const Phrases = () => (
    <div className="p-6 bg-gray-900 text-white">
        <IntroCard
            title="Useful English Phrases"
            summary="Real-world expressions for all fluency levels."
            Icon={MessageSquareQuote}
            theme="dark"
        />

        {sections.map((level, i) => (
            <div key={i} className="mb-4">
                <h3 className="text-lg font-semibold mb-1">{level}</h3>
                <ul className="list-disc ml-5 text-sm">
                    {examples[level].map((ex, idx) => <li key={idx}>{ex}</li>)}
                </ul>
            </div>
        ))}

        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Phrase Level Comparison</h2>
            <div className="space-y-6">
                {comparisons.map((group, idx) => (
                    <div key={idx} className="grid md:grid-cols-3 gap-4">
                        <div className="bg-green-800 text-white p-4 rounded shadow">{group[0]}</div>
                        <div className="bg-yellow-700 text-white p-4 rounded shadow">{group[1]}</div>
                        <div className="bg-indigo-700 text-white p-4 rounded shadow">{group[2]}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Phrases;
