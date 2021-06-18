import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/quill.png';
import Duane from '../images/duane.jpg';
import './about.css';

const about = () => {
  return (
    <div className='aboutPage'>
      <h1 className='aboutH1'>Chirpr | Built by Duane McDonald</h1>
      <h2>
        Chirpr is an app experimenting with the Twitter Standard API 2. Chirpr
        uses realtime tweets & streams from twitter users.
      </h2>
      <div className='about'>
        <div className='aboutApp'>
          <h2>Built with:</h2>
          <ul>
            <li>React.js</li>
            <li>Express.js</li>
            <li>CSS Animations</li>
            <li>Axios</li>
            <li>Twitter API 2.0</li>
            <li>CPanel Hosting</li>
          </ul>
        </div>
        <div className='aboutDuane'>
          <img className='duaneImg' src={Duane} alt='Duane McDonald' />
          <h2>Duane McDonald</h2>
          <h3>Software Engineer</h3>
          <a href='https://github.com/DuaneMcD'>Github.com/DuaneMcD</a>
          <br />
          <a href='https://DuaneMcDonald.com'>DuaneMcDonald.com</a>
          <br />
          <a href='www.linkedin.com/in/duane-mcd'>LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default about;
