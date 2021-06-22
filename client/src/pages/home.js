import React, { useState, useEffect } from 'react';
import Accordion from '../components/Accordion';
import './home.css';

const Home = () => {
  const [mostFollowedUsers, setMostFollowedUsers] = useState([]);
  const [mostFollowedIDs, setMostFollowedIDs] = useState([]);
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);
  const [usernameArray, setUsernameArray] = useState([]);
  const [testArray, setTestArray] = useState([]);

  const getFavoriteUsers = async () => {
    const mostFollowedUsers = await fetch(`http://localhost:3000/puppet/`);
    const favoriteUsersJson = await mostFollowedUsers.json();
    return setMostFollowedUsers(favoriteUsersJson);
  };

  const getFavoriteIds = async () => {
    const idNumbers = [];
    for (let i = 0; i < mostFollowedUsers.length; i++) {
      const idNumber = await fetch(
        `http://localhost:3000/users/${mostFollowedUsers[i]}`
      );
      const idNumberJson = idNumber.json();
      idNumbers.push(await idNumberJson);
    }
    console.log(idNumbers);
    return setMostFollowedIDs(idNumbers);
  };

  useEffect(() => {
    getFavoriteUsers();
  }, []);

  useEffect(() => {
    getFavoriteIds();
  }, [mostFollowedUsers]);

  useEffect(() => {
    fetchUserTweets();
  }, [mostFollowedIDs]);

  useEffect(() => {
    handleUserData();
  }, [tweetsArray]);

  const fetchUserTweets = async () => {
    const tweets = [];
    mostFollowedIDs.map(async id => {
      const response = await fetch(`http://localhost:3000/timeline/${id}`);
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
