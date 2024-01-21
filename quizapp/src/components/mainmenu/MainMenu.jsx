import { useState, React, useRef } from 'react';
import Modal from "../Modal";
import {useDispatch} from 'react-redux';
// when ever there is export default we dont use {}
import { motion, AnimatePresence } from "framer-motion";
import { setUserId } from '../../redux/resultReducer';

function MainMenu() {

    const [modalOpen, setModalOpen] = useState(false);
    const open = () => setModalOpen(true);
    const close = () => setModalOpen(false);
    const inputref = useRef(null);
    const dispatch = useDispatch();

    const handleClick = () =>{
        modalOpen ? close() : open()
        if(inputref.current?.value){
            dispatch(setUserId(inputref.current?.value))
        }
    }

    return (
        <div className='box1 flex-none'>
            <div className="textcont flex-none px-10 py-8 align-center ">
                <p className='text-center text-lg font-mono'>
                    welcom user, plese enter a name and click
                    <br /> on start for the game to begin.
                </p>
                <form className="form flex items-center px-10 py-10 ">
                    <input ref={inputref} className='self-center mx-20 px-10 py-1' type='text' placeholder='UserName: ' />
                </form>
            </div>
                <motion.button
                    className='text-yellow-600 px-10  btn outline-2'
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={handleClick}
                >
                    Start
                </motion.button>

            <AnimatePresence
                initial={false}
                onExitComplete={() => null}
            >
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
        </div>
    )
}

export default MainMenu
