import React,{useState,useContext} from 'react'
import { QuizContext } from '../../context/GameContext';

function EndGame() {
  const {gameState, setGameState,score,setScore} = useContext(QuizContext);

  return (
    <div className='container flex-none flex-col h-4/6 font text-black w-2/4'>
      <h1 className='text-4xl' >Quiz Ended - Result</h1>
      <div className="box gap-5 m-6">
        <div className="user">
          <span>UserName: </span>
          <span>hello</span>
        </div>
        <div className="point">
          <span>Total Points: </span>
          <span>{score}/10</span>
        </div>
        <div className="que">
          <span>Attempted Questions: </span>
          <span>10</span>
        </div>
      </div>
      <div className="start">
        <button className='text-yellow-600 px-10  btn outline-2' onClick={()=>{setGameState("menu")}}>Restart</button>
      </div>
    </div>
  )
}

export default EndGame
