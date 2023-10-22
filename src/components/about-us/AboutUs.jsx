import React from 'react';
import './about-us.style.css'
import LeftImg from './LeftImg';
import RightContent from './RightContent';
import {motion} from 'framer-motion'



const AboutUs = () => {
    return (
        <motion.section initial="hidden" whileInView="visible" id='about-us'>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <LeftImg/>
                    <RightContent/>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutUs;