import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import './home.css';

const Home = () => {
  const [favoriteIDs, setFavoriteIDs] = useState([
    // { user: ' elonmusk', id: 44196397 },
    { user: 'theellenshow', id: 15846407 },
  ]);
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);

  const fetchUserTweets = async () => {
    favoriteIDs.map(async user => {
      const response = await fetch(`http://localhost:3000/timeline/${user.id}`);
      // const response = await fetch(`http://localhost:3000/timeline/44196397`);
      const message = await response.json();
      setTweetsArray(await [message.data]);
      setIncludesArray(await message.includes);
    });
  };

  useEffect(() => {
    fetchUserTweets();
  }, []);

  return (
    <>
      <Navbar />
      <div className='homePage'>
        <div className='content-box'>
          <h1>Popular Twitter Streams:</h1>
          {tweetsArray.map((tweet, index) => (
            <Accordion
              title={`@${favoriteIDs[index]?.user}`}
              userStream={tweet}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
