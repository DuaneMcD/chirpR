import React, { useState } from 'react';
import { Card } from 'antd';
import {
  EditFilled,
  SendOutlined,
  LikeFilled,
  SearchOutlined,
} from '@ant-design/icons';
import bigBird from '../images/birdGif.gif';
import './search.css';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [tweetsArray, setTweetsArray] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      setSearched(true);
      handleSearch();
    }
  };

  const handleSearch = async () => {
    let newID = '';
    try {
      newID = await getUserId(searchInput);
    } catch (error) {
      alert(`Sorry, Twitter username ${searchInput} not found`);
      return;
    }
    await getUserInfo(newID);
    await fetchUserTweets(newID);
  };

  const getUserInfo = async id => {
    const response = await fetch(`/idlookup/${id}`);
    const message = await response.json();
    setUserInfo(message.data);
  };

  const getUserId = async user => {
    const response = await fetch(`/users/${user}`);
    const message = await response.json();
    return message;
  };

  const fetchUserTweets = async userId => {
    const response = await fetch(`/timeline/${userId}`);
    const message = await response.json();
    setTweetsArray(await message.data);
    return message;
  };

  const handleTimeStamp = dateString => {
    let timestamp = new Date(dateString);
    return timestamp.toDateString();
  };

  return (
    <>
      <div className='searchPage'>
        <div className='topbar'>
          <input
            className='searchBar'
            type='search'
            spellCheck={true}
            placeholder='Search by Twitter handle to view timeline'
            onKeyDown={handleKeyDown}
            onChange={e => setSearchInput(e.target.value)}
            results={8}
          />
          <SearchOutlined
            className='searchBar search-icon'
            onClick={handleSearch}
          />
        </div>
        <div className='searchContainer'>
          {searched === false ? (
            <div className='noSearch'>
              <img src={bigBird} alt='Chirpr Logo' />
            </div>
          ) : tweetsArray === undefined ? null : (
            tweetsArray.map((tweet, index) => {
              return (
                <>
                  <div className='stream-container' key={tweet.id}>
                    <Card
                      hoverable
                      className='card'
                      cover={
                        <img alt='User' src={userInfo.profile_image_url} />
                      }>
                      <div className='tweetInfo'>
                        <p className='name'>{userInfo.name}</p> <br />
                        <p className='username'>
                          {' @' + userInfo.username}
                        </p>{' '}
                        <br />
                        <p className='time-stamp'>{`▪ ${handleTimeStamp(
                          tweet.created_at
                        )}`}</p>
                      </div>
                      <div className='tweetText'>{tweet.text}</div>
                      <div className='buttons'>
                        <LikeFilled
                          className='like'
                          // key='like'
                        />
                        <EditFilled
                          className='comment'
                          // key='comment'
                        />
                        <SendOutlined
                          className='share'
                          // key='share'
                        />
                      </div>
                    </Card>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
