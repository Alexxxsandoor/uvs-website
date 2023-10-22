import React from 'react';
import { motion } from "framer-motion";
import './LeftText.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import ButtonGetStarted from '../button-get-started/ButtonGetStarted';

const textAnimation = {
  hidden:{
      x:-200,
      opacity:0,
  },
  visible:custom=>({
      x:0,
      opacity:1,
      transition:{delay: custom*0.1}
  })
}

const LeftText = () => {


    return (
        <div 
            id="left-text"
        >
            <motion.p custom={1} variants={textAnimation} id="WGSN-title">World Global Solutions Network</motion.p>
            <div className='title'>
                <motion.p custom={2} variants={textAnimation}>We Help You to <span>GROW</span></motion.p>
            </div>
            <motion.p custom={3} variants={textAnimation} class="WGSN-content">Some text about company i dont know what write i need text some text about company i dont know what write i need text</motion.p>
            <motion.p custom={4} variants={textAnimation} className='d-flex align-items-center WGSN-content'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></motion.p>
            <motion.p custom={5} variants={textAnimation} className='d-flex align-items-center WGSN-content mb-5'><i><FontAwesomeIcon  icon={faCircleCheck} /></i> <b>Quality of services</b></motion.p>
            <motion.div custom={6} variants={textAnimation}><ButtonGetStarted/></motion.div>
        </div>
    );
};

export default LeftText;