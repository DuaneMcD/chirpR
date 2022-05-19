import { useState, useEffect } from 'react';
import Accordion from '../components/Accordion';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [mostFollowedUsers, setMostFollowedUsers] = useState([]);
  const [mostFollowedIDs, setMostFollowedIDs] = useState([]);
  const [tweetsArray, setTweetsArray] = useState([]);
  const [usernameArray, setUsernameArray] = useState([]);

  const getFavoriteUsers = async () => {
    const mostFollowedUsers = await fetch(`/api/puppet`);
    const favoriteUsersJson = await mostFollowedUsers.json();
    return setMostFollowedUsers(favoriteUsersJson);
  };

  const getFavoriteIds = () => {
    const idNumbers = [];
    mostFollowedUsers.forEach(async user => {
      const userInfo = await fetch(`/api/users/${user}`);
      const userInfoJson = await userInfo.json();
      const userID = await userInfoJson.id;
      console.log(await userID);
      idNumbers.push(await userID);
    });
    setLoading(true);
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
      const response = await fetch(`/api/timeline/${id}`);
      const message = await response;
      tweets.push(await message.data);
      setTweetsArray(tweets);
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
    setLoading(false);
  };

  const getUserInfo = async id => {
    const response = await fetch(`/api/idlookup/${id}`);
    const message = await response.json();
    return await message.data.username;
  };

  return (
    <>
      <div className='homePage'>
        <div className='topbar'>
          <h1 className='popular-streams'>Explore Trending Twitter Feeds </h1>
        </div>
        {loading ? (
          <p className='loading-mini'>Loading...</p>
        ) : (
          <p className='moreUsers'>more users ➡</p>
        )}

        <div className='homeContainer'>
          {loading ? (
            <div className='loading'>LOADING TWEETS...</div>
          ) : (
            tweetsArray.map((tweet, index) => {
              return (
                <Accordion
                  key={tweet[0].id}
                  title={`@${usernameArray[index]}`}
                  userStream={tweet}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
