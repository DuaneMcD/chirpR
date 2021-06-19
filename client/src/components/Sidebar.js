import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/quill.png';
import {
  HomeOutlined,
  SearchOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import './Sidebar.css';

export function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className='sidebar'>
        <NavLink to='/home'>
          <img
            className='quill-logo'
            onClick={handleClick}
            src={logo}
            alt='Chirpr logo'
          />
        </NavLink>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <NavLink to='/home' activeClassName='is-active' className='nav-links'>
            <HomeOutlined />
          </NavLink>
          <NavLink
            to='/search'
            activeClassName='is-active'
            className='nav-links'>
            <SearchOutlined />
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='is-active'
            className='nav-links'>
            <InfoCircleOutlined />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
