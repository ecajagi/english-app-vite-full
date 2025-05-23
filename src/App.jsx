import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grammar from "./pages/WorkHard/Grammar";
import Phrases from "./pages/WorkHard/Phrases";
import GoodToKnow from "./pages/WorkHard/GoodToKnow";
import QuizSection from "./pages/WorkHard/QuizSection";
import Quotes from "./pages/PlayHard/Quotes";
import Idioms from "./pages/PlayHard/Idioms";
import Images from "./pages/PlayHard/Images";
import Pronouns from './pages/WorkHard/GrammarPages/Pronouns';
import Tenses from './pages/WorkHard/GrammarPages/Tenses';
import ModalVerbs from './pages/WorkHard/GrammarPages/ModalVerbs';
import QuestionForming from './pages/WorkHard/GrammarPages/QuestionForming';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/work/grammar" element={<Grammar />} />
        <Route path="/work/grammar/pronouns" element={<Pronouns />} />
        <Route path="/work/grammar/tenses" element={<Tenses />} />
        <Route path="/work/grammar/modal-verbs" element={<ModalVerbs />} />
        <Route path="/work/grammar/question-forming" element={<QuestionForming />} />
        <Route path="/work/phrases" element={<Phrases />} />
        <Route path="/work/good-to-know" element={<GoodToKnow />} />
        <Route path="/work/quiz" element={<QuizSection />} />
      <Route path="/play/quotes" element={<Quotes />} />
<Route path="/play/idioms" element={<Idioms />} />
<Route path="/play/images" element={<Images />} />
</Routes>
    </Router>
  );
}

export default App;
