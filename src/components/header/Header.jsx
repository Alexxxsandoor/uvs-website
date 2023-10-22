import React from 'react';
import "./header.style.css";
import logo from "../../images/logo/logo.3.png"

import ButtonGetStarted from '../button-get-started/ButtonGetStarted';

const Header = () => {
    return (
        <div id="header" className='py-2'>
            <div className="container">
                <nav className='d-flex justify-content-between align-items-center'>
                    <a href='#first-intro'><img id='header-logo' src={logo} alt="logo"/></a>
                    <ul className='d-flex justify-content-between navbar'>
                        <li><a href='#full-width-index'>Best Sides</a></li>
                        <li><a href='#about-us'>About</a></li>
                        <li><a href='#pricing'>Price</a></li>
                    </ul>
                    <ButtonGetStarted/>
                </nav>
            </div>
        </div>
    );
};

export default Header;