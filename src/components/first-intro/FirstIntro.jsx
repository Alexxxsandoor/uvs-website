import React from 'react';
import './first-intro.style.css'
import logo from '../../images/logo/logo.7.png'


const FirstIntro = () => {
    return (
        <div id='first-intro'>
            <div className='container'>
                <div className='d-flex flex-column justify-content-center align-items-center first-intro-content'>
                    <img src={logo}/>
                    <div className='text-center mt-4'>
                        <p>World Global Solutions Network</p>
                        <p>by Veronika Ulianova</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstIntro;