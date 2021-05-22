import React, { useState } from 'react';
import Card from '../components/card';
import './search.css';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchUserID, setSearchUserID] = useState('');
  const [tweetAuthor, setTweetAuthor] = useState([]);
  const [authorId, setAuthorId] = useState([]);
  const [tweetBody, setTweetBody] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [tweetMedia, setTweetMedia] = useState([]);
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);

  const handleSearch = e => {
    e.preventDefault();
    console.log(`Searched For:${searchInput}`);
    getUserId(searchInput);
    // fetchUserTweets(searchUserID);
  };

  const getUserId = async user => {
    const response = await fetch(`http://localhost:3000/users/${user}`);
    const message = await response.json();
    console.log(message);
    // setSearchUserID(await message);
  };

  const fetchUserTweets = async userId => {
    const response = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?expansions=attachments.media_keys&media.fields=preview_image_url,height,url`
    );
    const message = await response.json();
    console.log(message);
    setTweetsArray(await message.data);
    setIncludesArray(await message.data);
  };

  return (
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
        <Card
          className='card'
          tweetAuthor={tweetAuthor}
          authorId={authorId}
          tweetBody={tweetBody}
          userAvatar={userAvatar}
          tweetMedia={tweetMedia}
        />
      </div>
    </div>
  );
};

export default Search;
