
import idioms from '../../data/idioms.json';

export default function Idioms() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Idioms</h1>
      {idioms.map((idiom, idx) => (
        <div key={idx} className="border p-4 rounded shadow-sm bg-yellow-50">
          <p className="font-semibold italic">{idiom.text}</p>
          {idiom.vocab && (
            <p className="mt-2 text-sm text-gray-700">
              <span className="text-yellow-700 font-medium">{idiom.vocab.word}</span>: {idiom.vocab.explanation}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
