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
    return message;
  };

  return (
    <>
      <Navbar />
      <div>
        <button onClick={fetchUserTweets}>@ElonMusk</button>
        <div className='cardContainer'>
          {tweetsArray.map(tweet => (
            <Card
              key={tweet.id}
              className='card'
              tweetBody={tweet.text}
              MediaKey={tweet.attachments?.media_keys[0]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
