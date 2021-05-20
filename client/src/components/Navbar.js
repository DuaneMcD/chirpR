import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/quill.png';
import './Navbar.css';

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className='navbar'>
      <div className='menu-icon' onClick={handleClick}>
        <img className='quill' src={logo} alt='Chirpr logo' />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links'>
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
    </nav>
  );
}

export default Navbar;
