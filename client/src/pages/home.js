import React, { useState } from 'react';
import Accordion from '../components/Accordion';
import Card from '../components/card';
import Navbar from '../components/Navbar';

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

  return (
    <>
      <Navbar />
      <div className='cardContainer'>
        {tweetsArray.map((tweet, index) => (
          <Accordion
            className='accordion'
            username='ElonMusk'
            index={index}
            key={tweet.id}
            tweet={tweet.text}
            MediaKey={tweet.attachments?.media_keys[0]}
            onClick={fetchUserTweets}>
            <h2>Elon Musk</h2>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default Home;
