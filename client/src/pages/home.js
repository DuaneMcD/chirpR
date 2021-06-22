import React, { useState, useEffect } from 'react';
import Accordion from '../components/Accordion';
import './home.css';

const Home = () => {
  const [favoriteIDs, setFavoriteIDs] = useState([
    // { user: 'elonmusk', id: 44196397 },
    // { user: 'theellenshow', id: 15846407 },
    // { user: 'taylorswift13', id: 17919972 },
    // { user: 'elonmusk', id: 44196397 },
    // { user: 'theellenshow', id: 15846407 },
    // { user: 'taylorswift13', id: 17919972 },
  ]);
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);
  const [usernameArray, setUsernameArray] = useState([]);
  const [testArray, setTestArray] = useState([]);

  const getFavoriteIDs = async () => {
    const favorites = await fetch(`http://localhost:3000/puppet/`);
    const favArray = await favorites.json();
    favArray.forEach(username => {});
    return setFavoriteIDs(favArray);
  };

  useEffect(() => {
    getFavoriteIDs();
  }, []);

  useEffect(() => {
    fetchUserTweets();
  }, [favoriteIDs]);

  useEffect(() => {
    handleUserData();
  }, [tweetsArray]);

  // const fetchUserTweets = async () => {
  //   const tweets = [];
  //   favoriteIDs.map(async user => {
  //     const response = await fetch(`http://localhost:3000/timeline/${user.id}`);
  //     const message = await response.json();
  //     tweets.push(await message.data);
  //     setTweetsArray(tweets);
  //     setIncludesArray(await message.includes);
  //   });
  // };

  const fetchUserTweets = async () => {
    const tweets = [];
    testArray.map(async user => {
      const userid = await fetch(`http://localhost:3000/users/${user}`);
      const response = await fetch(`http://localhost:3000/timeline/${userid}`);
      const message = await response.json();
      tweets.push(await message.data);
      setTweetsArray(tweets);
      setIncludesArray(await message.includes);
    });
  };

  const handleUserData = async () => {
    let twitterHandles = [];
    for (let i = 0; i < tweetsArray.length; i++) {
      const twitHandle = tweetsArray[i];
      let handle = await getUserInfo(twitHandle[0]?.author_id);
      twitterHandles.push(handle);
    }
    setUsernameArray(twitterHandles);
  };

  const getUserInfo = async id => {
    const response = await fetch(`http://localhost:3000/idlookup/${id}`);
    const message = await response.json();
    return await message.data.username;
  };

  return (
    <>
      <div className='homePage'>
        <div className='topbar'>
          <h1 className='popular-streams'>Explore Trending Twitter Feeds</h1>
        </div>
        <div className='homeContainer'>
          {tweetsArray.map((tweet, index) => {
            return (
              <Accordion
                title={`@${usernameArray[index]}`}
                userStream={tweet}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
