import React, { useState, useEffect } from 'react';
import Accordion from '../components/Accordion';
import './home.css';

const Home = () => {
  const [favoriteIDs, setFavoriteIDs] = useState([
    { user: 'elonmusk', id: 44196397 },
    { user: 'theellenshow', id: 15846407 },
    { user: 'taylorswift13', id: 17919972 },
    { user: 'elonmusk', id: 44196397 },
    { user: 'theellenshow', id: 15846407 },
    { user: 'taylorswift13', id: 17919972 },
  ]);
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);
  const tweets = [];
  let user = [];

  const fetchUserTweets = async () => {
    favoriteIDs.map(async user => {
      const response = await fetch(`http://localhost:3000/timeline/${user.id}`);
      const message = await response.json();
      tweets.push(await message.data);
      setTweetsArray(tweets);
      setIncludesArray(await message.includes);
    });
  };

  const getUserInfo = async id => {
    const response = await fetch(`http://localhost:3000/idlookup/${id}`);
    const message = await response.json();
    return message.data.name;
  };

  useEffect(() => {
    fetchUserTweets();
  }, []);

  return (
    <>
      <div className='homePage'>
        <div className='topbar'>
          <h1 className='popular-streams'>Explore Trending Twitter Feeds</h1>
        </div>
        <div className='homeContainer'>
          {tweetsArray.map(async (tweet, index) => {
            let handle = getUserInfo(tweet[0]?.author_id);

            return <Accordion title={`@${await handle}`} userStream={tweet} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
