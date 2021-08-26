import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Button from './Button';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }
    return (  
        <>
        <nav className='navbar'>
            <li><a href='/logo' className='navbar-logo' i className='fab fa-firstdraft'>LOGO</a></li>
            <div className='menu-icon' on Click={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><a href='/' className='nav-links' onClick={closeMobileMenu}>Home</a>
                </li>
                <li className='nav-item'><a href='/about' className='nav-links' onClick={closeMobileMenu}>About Us</a>
                </li>
                <li className='nav-item' 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                    <a href='/services' className='nav-links' onClick={closeMobileMenu} 
                i className='fas fa-caret-down'>Services</a>
                </li>
                {dropdown && <Dropdown />}
                <li className='nav-item'><a href='/contact' className='nav-links' onClick={closeMobileMenu}>Contact Us</a>
                </li>
                <li className='nav-item'><a href='/sign-up' className='nav-links' onClick={closeMobileMenu}>Sign Up</a>
                </li>
            </ul>
            
        </nav>
        </>
    );
}
 
export default Navbar;