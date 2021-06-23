import React, { useState } from 'react';
import { Card } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import bigBird from '../images/birdGif.gif';
import './search.css';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);
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
    const response = await fetch(`http://localhost:3000/idlookup/${id}`);
    const message = await response.json();
    setUserInfo(message.data);
  };

  const getUserId = async user => {
    const response = await fetch(`http://localhost:3000/users/${user}`);
    const message = await response.json();
    return message;
  };

  const fetchUserTweets = async userId => {
    const response = await fetch(`http://localhost:3000/timeline/${userId}`);
    const message = await response.json();
    setTweetsArray(await message.data);
    setIncludesArray(await message.includes.users);
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
            placeholder='Search by username to view timeline'
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
          ) : (
            tweetsArray.map((tweet, index) => {
              return (
                <>
                  <div className='stream-container'>
                    <Card
                      hoverable
                      key={tweet.id}
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
                        <SettingOutlined className='setting' key='setting' />
                        <EditOutlined className='edit' key='edit' />
                        <EllipsisOutlined className='ellipsis' key='ellipsis' />
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
