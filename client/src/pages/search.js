import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import './search.css';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [tweetAuthor, setTweetAuthor] = useState('Funny Guy');
  const [authorId, setAuthorId] = useState([]);
  const [tweetBody, setTweetBody] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [tweetMedia, setTweetMedia] = useState([]);
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    console.log(`Searched For:${searchInput}`);
    let newID = await getUserId(searchInput);
    await fetchUserTweets(newID);
    // handleMediaKey();
  };

  const getUserId = async user => {
    const response = await fetch(`http://localhost:3000/users/${user}`);
    const message = await response.json();
    return message;
  };

  const fetchUserTweets = async userId => {
    const response = await fetch(`http://localhost:3000/timeline/${userId}`);
    const message = await response.json();
    // console.log(message.data);
    setTweetsArray(await message.data);
    setIncludesArray(await message.includes);
    return message;
  };

  const handleMediaKey = key => {
    let mediaObj = includesArray.media.find(key);
    console.log(mediaObj);
  };

  return (
    <>
      <Navbar />
      <div className='searchPage'>
        <div className='searchBar'>
          <form onSubmit={handleSearch}>
            <input
              onChange={e => setSearchInput(e.target.value)}
              type='text'
              name='search'
              id='search'
              value={searchInput}
            />
            <button type='submit' className='searchBtn'>
              Search
            </button>
          </form>
        </div>

        <div className='cardContainer'>
          <img className='avatar' src={userAvatar} alt='' />
          <p className='user'> {tweetAuthor} </p>
          {tweetsArray.map(tweet => (
            <Timeline
              key={tweet.id}
              className='card'
              tweetBody={tweet.text}
              tweetMedia={tweetMedia}
              MediaKey={tweet.attachments?.media_keys[0]}
              // MediaURL={handleMediaKey(tweet.attachments?.media_keys[0])}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
