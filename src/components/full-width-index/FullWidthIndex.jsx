import {motion} from 'framer-motion'

import './FullWidthIndex.style.css'
import ImageIntro from './ImageIntro';
import LeftText from './LeftText';



const FullWidthIndex = () => {
    return (
        <motion.section 
            initial="hidden"
            whileInView="visible"
            id='full-width-index' 
            className='py-4 my-3'
        >
            <div className="container">
                <div className='d-flex  justify-content-between'>
                    <LeftText/>
                    <ImageIntro/>
                </div>
            </div>
        </motion.section>
    );
};

export default FullWidthIndex;