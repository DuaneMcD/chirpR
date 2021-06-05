import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';

const Home = () => {
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);

  const fetchUserTweets = async () => {
    // const response = await fetch(`http://localhost:3000/timeline/${userId}`);
    const response = await fetch(`http://localhost:3000/timeline/44196397`);
    const message = await response.json();
    setTweetsArray(await message.data);
    setIncludesArray(await message.includes);
  };
  // component

  return (
    <>
      <Navbar />
      ELON
      <div className='accordion' onClick={fetchUserTweets}>
        <Accordion
          className='accordion'
          username='ElonMusk'
          index={1}
          key={tweetsArray.id}
          tweet={tweetsArray.text}
          MediaKey={tweetsArray.attachments?.media_keys[0]}
          onClick={fetchUserTweets}
        />
      </div>
    </>
  );
};

export default Home;
