import React,{useState,useContext} from 'react';
import { Questions } from '../../context/Questions';
import { QuizContext } from '../../context/GameContext';
import { motion } from 'framer-motion';

function QuizPart() {
  const [currentQues,setCurrentQue]= useState(0);
  const [choice,setChoice] = useState("");  
  const {gameState, setGameState,score,setScore,question,setQuestion} = useContext(QuizContext);

  const nextquestion = () =>{
    if(currentQues == Questions.length-1){
      setGameState("endgame")
    }
    if(Questions[currentQues].ans == choice){
      setScore(score+2);
      setQuestion(question+1);
      setCurrentQue(currentQues+1);
    }else{
      setCurrentQue(currentQues+1);
    }  
  }

  return (
    <div className='container flex-none gap-4 h-96 w-2/4 rounded-xl flex-col justify-center p-5 text-gray-950 font-mono'>
      <h1 className='m-4'>{currentQues+1}- {Questions[currentQues].que}</h1>
      <div className='flex-none btncont gap-1'>
        <button onClick={()=>{setChoice("A")}} className='border-2 border-black w-96 h-7'>{Questions[currentQues].options[0]}</button>
        <button onClick={()=>{setChoice("B")}} className='border-2 border-black w-96 h-7'>{Questions[currentQues].options[1]}</button>
        <button onClick={()=>{setChoice("C")}} className='border-2 border-black w-96 h-7'>{Questions[currentQues].options[2]}</button>
        <button onClick={()=>{setChoice("D")}} className='border-2 border-black w-96 h-7'>{Questions[currentQues].options[3]}</button>
      </div>
      <button onClick={nextquestion} className='text-yellow-600 px-10 btn outline-2'>Next</button>
    </div>
  )
}

export default QuizPart
