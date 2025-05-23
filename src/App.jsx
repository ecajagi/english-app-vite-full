
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grammar from "./pages/WorkHard/Grammar";
import Phrases from "./pages/WorkHard/Phrases";
import GoodToKnow from "./pages/WorkHard/GoodToKnow";
import QuizSection from "./pages/WorkHard/QuizSection";
import Quotes from "./pages/PlayHard/Quotes";
import Idioms from "./pages/PlayHard/Idioms";
import Images from "./pages/PlayHard/Images";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/work/grammar" element={<Grammar />} />
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
