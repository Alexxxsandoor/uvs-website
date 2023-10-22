import React from 'react';
import { faArrowUpRightDots, faBriefcase, faPen} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdvantagesCompany.style.css'
import {motion} from 'framer-motion'

const textAnimation = {
    hidden:{
        y:100,
        opacity:0,
    },
    visible:custom=>({
        y:0,
        opacity:1,
        transition:{delay: custom*0.25}
    })
  }

const AdvantagesCompany = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            className='container' 
            id='AdvantagesCompany'
        >
            <div className='d-flex justify-content-around align-items-center trinity-qualities'>
                <motion.div custom={1} variants={textAnimation} className='text-center d-flex flex-column align-items-center'>
                    <div className='circle color1 mb-4'><i><FontAwesomeIcon icon={faArrowUpRightDots} /></i></div>
                    <p><b>Some text</b></p>
                    <p>tell us something cool, concise and understandable for everyone tell us something cool, concise and understandable for everyone</p>
                </motion.div>
                <motion.div custom={2} variants={textAnimation} className='text-center d-flex flex-column align-items-center'>
                    <div className='circle color2 mb-4'><i><FontAwesomeIcon icon={faPen} /></i></div>
                    <p><b>Some text</b></p>
                    <p>tell us something cool, concise and understandable for everyone tell us something cool, concise and understandable for everyone</p>
                </motion.div>
                <motion.div custom={3} variants={textAnimation} className='text-center d-flex flex-column align-items-center'>
                    <div className='circle color3 mb-4'><i><FontAwesomeIcon icon={faBriefcase} /></i></div>
                    <p><b>Some text</b></p>
                    <p>tell us something cool, concise and understandable for everyone tell us something cool, concise and understandable for everyone</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AdvantagesCompany;