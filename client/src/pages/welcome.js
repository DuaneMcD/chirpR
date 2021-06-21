import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {
  return (
    <>
      <main className='modal'>
        <h2>Welcome To Chirpr</h2>
        <label htmlFor='username'>Username </label>
        <input id='username' type='text' />
        <label htmlFor='username'>Password </label>
        <input id='username' type='text' />

        <button>
          <Link to='/home'>Browse as Guest</Link>
        </button>
      </main>
    </>
  );
};

export default Welcome;
