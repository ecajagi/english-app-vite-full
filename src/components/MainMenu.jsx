
import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <nav className="p-4 grid grid-cols-2 gap-4">
      <div>
        <h2 className="font-bold text-lg">Work Hard</h2>
        <ul>
          <li><Link to="/workhard/grammar.jsx">Grammar</Link></li>
          <li><Link to="/workhard/phrases.jsx">Phrases</Link></li>
          <li><Link to="/workhard/good-to-know.jsx">Good to Know</Link></li>
          <li><Link to="/workhard/quiz.jsx">Quiz</Link></li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-lg">Play Hard</h2>
        <ul>
          <li><Link to="/playhard/quotes.jsx">Quotes</Link></li>
          <li><Link to="/playhard/idioms.jsx">Idioms</Link></li>
          <li><Link to="/playhard/images.jsx">Images</Link></li>
        </ul>
      </div>
    </nav>
  );
}
