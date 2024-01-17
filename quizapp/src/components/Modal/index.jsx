import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import './design.css';
import React, { useContext } from 'react'
import { QuizContext } from '../../context/GameContext';

function Modal(props) {
  const { gameState, setGameState } = useContext(QuizContext)
  const dropIn = {
    hidden: {
      y: "-100vh"
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,      //hight can cause it to not bounce and low vice-vers
        stiffness: 500
      }
    },
    exit: {
      y: "100vh"
    }
  }
  //preventdefault-stops the default behaviour and stopPropagation-stop from trigring the parent ele, are almost same 
  const { handleClose, text } = props;
  const clicked = () => {
    setGameState("quizpart")
    handleClose
  }
  return (
    <Backdrop
      onClick={handleClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="innercont">
          <div className="my-5 py-3">
            <h1 className="text-lg">Rules:</h1>
            <p className="text-sm">1- One must attemp all the questions. </p>
            <p className="text-sm">2- Points will be given according to the correct answers. </p>
            <p className="text-sm">3- There will be 4 options out of which only 1 is correct. </p>
            <p className="text-sm">4- There is no negative marking. </p>
          </div>
          <button className="text-yellow-600 btn w-28" onClick={clicked}>Next</button>
        </div>
      </motion.div>

    </Backdrop>
  )
}

export default Modal
