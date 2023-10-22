import React from 'react';
import img from '../../images/about-us/about-us.png'
import {motion} from 'framer-motion'

const ImgAnimation = {
    hidden:{
        x:-200,
        opacity:0,
    },
    visible:{
        x:0,
        opacity:1,
        transition:{delay: 0.2}
    }
  }
const BgImgAnimation = {
    hidden:{
        rotate: 0,
        x:-200,
        opacity:0,
    },
    visible:{
        rotate: 5,
        x:0,
        opacity:1,
        transition:{delay: 0.3}
    }
  }



const LeftImg = () => {
    return (
        <div id='about-us-left-img'>
            <motion.div variants={BgImgAnimation} className='bg-gradient'/>
            <motion.img variants={ImgAnimation} src={img}/>
        </div>
    );
};

export default LeftImg;