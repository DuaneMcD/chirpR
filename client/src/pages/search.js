import React, { useState } from 'react';
import { Input, Card } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import bigBird from '../images/birdGif.gif';
import './search.css';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [tweetsArray, setTweetsArray] = useState([]);
  const [includesArray, setIncludesArray] = useState([]);
  const { Search } = Input;
  const { Meta } = Card;

  const handleSearch = async e => {
    console.log(`Searched For:${searchInput}`);
    let newID = await getUserId(searchInput);
    await fetchUserTweets(newID);
  };

  const getUserInfo = async id => {
    const response = await fetch(`http://localhost:3000/idlookup/${id}`);
    const message = await response.json();
    return message.data;
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
          <Search
            className='antSearchBar'
            placeholder='input search text'
            onSearch={handleSearch}
            onChange={e => setSearchInput(e.target.value)}
            enterButton
            size='large'
          />
        </div>
        <div className='searchContainer'>
          {searchInput === '' ? (
            <div className='noSearch'>
              <p>Search For Someone</p>
              <img src={bigBird} alt='Chirpr Logo' />
            </div>
          ) : (
            tweetsArray.map((tweet, index) => {
              let idLookup = getUserInfo(tweet.author_id);
              let username = idLookup?.username;
              let name = idLookup?.name;
              let avatar = idLookup?.profile_image_url;
              return (
                <>
                  <div className='stream-container'>
                    <Card
                      hoverable
                      key={tweet.id}
                      className='card'
                      cover={<img alt='User' src={avatar} />}>
                      <div className='tweetInfo'>
                        <p className='name'>{name}</p> <br />
                        <p className='username'>{' @' + username}</p> <br />
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
