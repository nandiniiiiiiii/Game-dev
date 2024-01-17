import {motion} from "framer-motion";
import React from 'react'
import './design.css';

function Backdrop(props) {

    //defining props(1- for additional components 2- checked whether btn is clicked or not)
    const {children,onClick} = props;

  return (
    <motion.div
        className="backdrop"
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
