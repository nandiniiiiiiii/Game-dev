import React,{useState,useContext} from 'react';
import { Questions } from '../../context/Questions';
import { QuizContext } from '../../context/GameContext';

function QuizPart() {
  const [currentQues,setCurrentQue]= useState(0);
  const [choice,setChoice] = useState("");  
  const {gameState, setGameState,score,setScore} = useContext(QuizContext);

  const nextquestion = () =>{
    if(currentQues == Questions.length-1){
      setGameState("endgame")
    }
    if(Questions[currentQues].ans == choice){
      setScore(score+1);
      setCurrentQue(currentQues+1);
    }else{
      setCurrentQue(currentQues+1);
    }  
  }

  return (
    <div className='quiz flex-none gap-2 bg-sky-300 '>
      <h1>{currentQues+1}- {Questions[currentQues].que}</h1>
      <div className='option'>
        <button onClick={()=>{setChoice("A")}}>{Questions[currentQues].options[0]}</button>
        <button onClick={()=>{setChoice("B")}}>{Questions[currentQues].options[1]}</button>
        <button onClick={()=>{setChoice("C")}}>{Questions[currentQues].options[2]}</button>
        <button onClick={()=>{setChoice("D")}}>{Questions[currentQues].options[3]}</button>
      </div>
      <button onClick={nextquestion}>Next</button>
    </div>
  )
}

export default QuizPart
