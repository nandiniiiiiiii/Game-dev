import React,{useState,useContext} from 'react'
import { QuizContext } from '../../context/GameContext';

function EndGame() {
  const {gameState, setGameState,score,setScore} = useContext(QuizContext);

  return (
    <div className='container'>
      <h1>Quiz Ended - Result</h1>
      <div className="box">
        <div className="user">
          <span>UserName: </span>
          <span>hello</span>
        </div>
        <div className="point">
          <span>Total Points: </span>
          <span>{score}</span>
        </div>
        <div className="que">
          <span>Attempted Questions: </span>
          <span>10</span>
        </div>
      </div>
      <div className="start">
        <button onClick={()=>{setGameState("menu")}}>Restart</button>
      </div>
    </div>
  )
}

export default EndGame
