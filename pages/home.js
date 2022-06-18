import { useState, useEffect, useRef } from 'react';
import Accordion from '../components/Accordion';
import ScrollButtons from '../components/ScrollButtons';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [mostFollowedUsers, setMostFollowedUsers] = useState([]);
  const [tweetsArray, setTweetsArray] = useState([]);
  const usersScrollRef = useRef();

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
        return setMostFollowedUsers(res);
      });
  }, []);

  // get ID's for the top profiles (scraped from wikipedia)
  useEffect(() => {
    async function fetchUserTweets() {
      const promises = mostFollowedUsers?.map(async user => {
        const userID = await fetch(`/api/users/${user}`)
          .then(res => {
            return res.json();
          })
          .catch(err => {
            return console.log(err);
          });

        const recentTweets = await fetch(`/api/timeline/${userID.data?.id}`)
          .then(res => {
            return res.json();
          })
          .catch(err => {
            return console.log(err);
          });

        const { username, profile_image_url, id, name } = await fetch(
          `/api/idlookup/${userID.data?.id}`
        )
          .then(res => {
            return res.json();
          })
          .catch(err => {
            return console.log(err);
          });

        // console.log(userData);
        return [
          { username },
          { profile_image_url },
          { id },
          { name },
          { recentTweets },
        ];
      });
      const results = await Promise.all(promises);

      return setTweetsArray(results);
    }

    fetchUserTweets();
  }, [mostFollowedUsers]);

  useEffect(() => {
    if (tweetsArray.length > 1) {
      setLoading(false);
    }
  }, [tweetsArray]);

  const scrollHomeTweets = direction => {
    switch (direction) {
      case 'left':
        usersScrollRef.current.scrollLeft -=
          usersScrollRef.current.scrollWidth / 16;
        break;
      case 'right':
        usersScrollRef.current.scrollLeft +=
          usersScrollRef.current.scrollWidth / 16;
        break;
      // default:
      //   usersScrollRef.current.scrollLeft += direction;
    }
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
          <ScrollButtons scrollHomeTweets={scrollHomeTweets} />
        )}
        <div className='homeContainer' ref={usersScrollRef}>
          {loading ? (
            <div className='loading'>LOADING TWEETS...</div>
          ) : (
            Object.entries(tweetsArray).map(user => {
              return (
                <Accordion
                  key={Object.values(user[1][2])}
                  title={`@${Object.values(user[1][0])}`}
                  imageSRC={Object.values(user[1][1])[0]}
                  userStream={Object.values(user[1][4])[0]}
                  scrollHomeTweets={scrollHomeTweets}
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
