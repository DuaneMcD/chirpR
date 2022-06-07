import { useState, useEffect, useRef } from 'react';
import Accordion from '../components/Accordion';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [mostFollowedUsers, setMostFollowedUsers] = useState([]);
  const [tweetsArray, setTweetsArray] = useState([]);
  const [usernameArray, setUsernameArray] = useState([]);
  const scrollRef = useRef();

  const removeUsers = user => {
    // inactive accounts cause undefined errors
    return user !== 'realDonaldTrump' && user !== 'ArianaGrande';
  };

  // scrape most followed users from wikipedia list
  useEffect(() => {
    setLoading(true);
    fetch(`/api/puppet`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res.filter(removeUsers);
      })
      .then(res => {
        setMostFollowedUsers(res);
      });
  }, []);

  // get ID's for the top profiles (scraped from wikipedia)
  useEffect(() => {
    let isCancelled = false;
    let currentTweets = [];
    if (!isCancelled) {
      mostFollowedUsers?.map(async user => {
        await fetch(`/api/users/${user}`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(user);
            return fetch(`/api/timeline/${data.data?.id}`);
          })
          .then(res => {
            return res.json();
          })
          .then(tweets => {
            return currentTweets.push(tweets);
          })
          .then(() => {
            mostFollowedUsers.length == currentTweets.length
              ? (setTweetsArray([...currentTweets]),
                console.log('tweets loaded'))
              : '';
          })
          .catch(err => {
            return console.log(err);
          });
      });
    }

    return () => {
      isCancelled = true;
    };
  }, [mostFollowedUsers]);

  useEffect(() => {
    let isCancelled = false;
    let handles = [];
    if (!isCancelled) {
      tweetsArray?.map(async tweet => {
        await getUserInfo(tweet[0]?.author_id)
          .then(res => {
            return handles.push(res);
          })
          .then(() => {
            if (tweetsArray.length == handles.length) {
              console.log('usernames loaded');
              setUsernameArray([...handles]);
              return setLoading(false);
            }
          });
      });
    }
    return () => {
      isCancelled = true;
    };
  }, [tweetsArray]);

  const getUserInfo = async id => {
    const response = await fetch(`/api/idlookup/${id}`);
    const message = await response?.json();
    return await message.username;
  };

  const scrollHomeTweets = () => {
    scrollRef.scrollRight(100);
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
          <button className='moreUsers' onClick={scrollHomeTweets}>
            more users ➡
          </button>
        )}

        <div className='homeContainer' ref={scrollRef}>
          {loading ? (
            <div className='loading'>LOADING TWEETS...</div>
          ) : (
            tweetsArray?.map((tweet, index) => {
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
