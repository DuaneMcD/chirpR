import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/quill.png';
import './Navbar.css';

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className='nav-frame'>
        <div className='sidebar'>
          <img
            className='quill-logo'
            onClick={handleClick}
            src={logo}
            alt='Chirpr logo'
          />
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links'>
                Chirpr
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/search' className='nav-links'>
                Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links'>
                About
              </Link>
            </li>
          </ul>
        </div>
        <nav className='navbar'></nav>
      </div>
    </>
  );
}

export default Navbar;
