
import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <nav className="p-4 grid grid-cols-2 gap-4">
      <div>
        <h2 className="font-bold text-lg">Work Hard</h2>
        <ul>
          <li><Link to="/work/grammar">Grammar</Link></li>
          <li><Link to="/work/phrases">Phrases</Link></li>
          <li><Link to="/work/good-to-know">Good to Know</Link></li>
          <li><Link to="/work/quiz">Quiz</Link></li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-lg">Play Hard</h2>
        <ul>
          <li><Link to="/play/quotes">Quotes</Link></li>
          <li><Link to="/play/idioms">Idioms</Link></li>
          <li><Link to="/play/images">Images</Link></li>
        </ul>
      </div>
    </nav>
  );
}
