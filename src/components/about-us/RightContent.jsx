import React from 'react';
import {motion} from 'framer-motion'
const textAnimation = {
    hidden:{
        x:200,
        opacity:0,
    },
    visible:custom=>({
        x:0,
        opacity:1,
        transition:{delay: custom*0.2}
    })
  }


const RightContent = () => {
    return (
        <div id='about-us-right-content'>
            <motion.h5 custom={1} variants={textAnimation} className='fist-title'>Worldwide Global Solutions Network by Veronika Ulianova</motion.h5>
            <motion.h1 custom={2} variants={textAnimation} className='fist-title'>About Us</motion.h1>
            <motion.p custom={3} variants={textAnimation} >Worldwide Global Solutions Network by Veronika Ulianova is a global network that strives to provide innovative solutions to various challenges faced by corporate companies and people around the world. The network brings together experts, organizations and individuals from different sectors and areas of activity to collaborate to effectively address global challenges.</motion.p>
            <motion.p custom={4} variants={textAnimation}>I offer you a universal service where you can order everything you need for your life and the life of your company, and we will take care of it with regular reporting on the work done. We are focused on supporting sustainable development for both companies and individuals.</motion.p>
        </div>
    );
};

export default RightContent;