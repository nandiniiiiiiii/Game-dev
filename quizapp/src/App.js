import './App.css';
import MainMenu from './components/mainmenu/MainMenu';
import React, { useState, useContext } from "react";
import QuizPart from './components/quizpart';
import EndGame from './components/endgame';
import { QuizContext } from './context/GameContext';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score,setScore] = useState(0);

  return (
    <div className='app'>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quizpart" && <QuizPart />}
        {gameState === "endgame" && <EndGame />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
