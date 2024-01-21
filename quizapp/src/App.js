import './App.css';
import MainMenu from './components/mainmenu/MainMenu';
import React, { useState, useContext } from "react";
import QuizPart from './components/quizpart';
import EndGame from './components/endgame';
import { QuizContext } from './context/GameContext';
import {CheckUserExist} from './helper/helper';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score,setScore] = useState(0);
  const [name,setName] = useState("not defined");
  const [question,setQuestion] = useState(0);

  return (
    <div className='app'>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore,name,setName,question,setQuestion}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quizpart" && 
          <QuizPart />}
        {gameState === "endgame" && 
          <EndGame />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
