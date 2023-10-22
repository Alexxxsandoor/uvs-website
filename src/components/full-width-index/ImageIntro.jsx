import React from 'react';
import imgHands from '../../images/FullWidthIndex/FullWidthIndex.png'
import { motion } from "framer-motion";

const ImgAnimation = {
    hidden:{
        x:200,
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
        x:200,
        opacity:0,
    },
    visible:{
        rotate: -3,
        x:0,
        opacity:1,
        transition:{delay: 0.3}
    }
  }

const ImageIntro = () => {
    return (
        <div id='full-width-index-image'>
            <motion.div variants={BgImgAnimation} id='full-width-index-image-bg'/>
            <motion.img variants={ImgAnimation} src={imgHands} alt="full-width-img" />
        </div>
    );
};

export default ImageIntro;