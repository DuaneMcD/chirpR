import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import { CaretDownFilled } from '@ant-design/icons';
import './home.css';

const Home = () => {
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);
  const [active, setActive] = useState([]);
  const [display, setDisplay] = useState('none');
  const contentRef = useRef(null);

  const fetchUserTweets = async () => {
    // const response = await fetch(`http://localhost:3000/timeline/${userId}`);
    const response = await fetch(`http://localhost:3000/timeline/44196397`);
    const message = await response.json();
    setTweetsArray(await message.data);
    setIncludesArray(await message.includes);
  };

  useEffect(() => {
    fetchUserTweets();
  }, []);

  const toggleAccordion = () => {
    setActive(!active);
    setDisplay(active ? 'inherit' : 'none');
  };

  const text = [
    {
      text: `A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.`,
    },
  ];

  return (
    <>
      <Navbar />
      <div className='homePage'>
        <div className='content-box'>
          <h1>Popular Twitter Streams:</h1>
          <Accordion title='@ElonMusk' userStream={tweetsArray} />
          <Accordion title='@TheRealSammy' userStream={text} />
        </div>
      </div>
    </>
  );
};

export default Home;
