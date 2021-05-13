import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/quill.png';

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className='navbar'>
      <div className='menu-icon' onClick={handleClick}>
        <img className='quill' src={logo} alt='Chirpr logo' />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>CHIRPr</li>
        <li className='nav-item'>Search</li>
        <li className='nav-item'>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;
