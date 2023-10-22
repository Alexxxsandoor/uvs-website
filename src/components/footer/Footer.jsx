import React from 'react';
import "./footer.style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div id='footer' className='pt-3 pb-1'>
            <div className="container">
                {/* <p className='text-center text-bold text-white'>by Veronika Ulianova</p> */}
                <ul className='d-flex justify-content-center'>
                    <li><a href='/' target='_blank' alt=""><i><FontAwesomeIcon icon={faSquareFacebook} /></i></a></li>
                    <li><a href='/' target='_blank' alt=""><i><FontAwesomeIcon icon={faSquareInstagram} /></i></a></li>
                    <li><a href='/' target='_blank' alt=""><i><FontAwesomeIcon icon={faLinkedin} /></i></a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Footer;