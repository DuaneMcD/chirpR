import React, { useState } from 'react';
import logo from '../components/images/quill.png';
import Link from 'next/link';
import Image from 'next/image';
import {
  HomeOutlined,
  SearchOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className='sidebar'>
        <Link href='/home'>
          <>
            <Image
              className='quill-logo'
              onClick={handleClick}
              src={logo}
              alt='Chirpr logo'
            />
          </>
        </Link>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link href='/home' activeClassName='is-active' className='nav-links'>
            <HomeOutlined />
          </Link>
          <Link
            href='/search'
            activeClassName='is-active'
            className='nav-links'>
            <SearchOutlined />
          </Link>
          <Link href='/about' activeClassName='is-active' className='nav-links'>
            <InfoCircleOutlined />
          </Link>
        </div>
      </div>
    </>
  );
}
