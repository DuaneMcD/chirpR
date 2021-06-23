import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <>
      <main className='modal'>
        <h2>Welcome To Chirpr</h2>
        <label id='username-label' htmlFor='username'>
          Username
        </label>
        <input id='username' type='text' />
        <label id='password-label' htmlFor='password'>
          Password
        </label>
        <input id='password' type='text' />

        <Link className='browseAsGuest' to='/home'>
          Browse as Guest
        </Link>
      </main>
    </>
  );
};

export default Welcome;
