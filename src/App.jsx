import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Methods from './pages/Methods';
import Quizz from './pages/Quizz';
import Home from './pages/Home';
import { AudioDevilTrigger } from 'react-devil-trigger';

import audioSrc from './assets/audio/audio_strings.mp3';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/methods" element={<Methods />} />
            <Route path="/quizz" element={<Quizz />} />
          </Routes>
        </main>
        <footer className="w-full h-16 bg-gradient-to-b from-transparent to-secondary mt-auto">
          <div className="container mx-auto flex items-center justify-center h-full">
            <p className="text-base-content text-opacity-80 text-lg">
              Made with ❤️ by <span className="text-primary">Dream Team</span> 
            </p>
          </div>
        </footer>
        <AudioDevilTrigger
          audioSrc={audioSrc}
          triggerWord="strings"
          playingTitle="Strings en JS"
          title="Dale al play webón"
          easterEggText="Opa! Encontraste el Easter Egg! 🎉"
          primaryColor="#f861b4"
          secondaryColor="#71d1fe"
          accentColor="#422ad5"
          showEasterEggText={false}
        />
      </div>
    </Router>
  );
};

export default App;
