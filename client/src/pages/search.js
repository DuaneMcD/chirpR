import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Card } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import _ from 'lodash';
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
  const { Meta } = Card;

  const handleSearch = async e => {
    e.preventDefault();
    console.log(`Searched For:${searchInput}`);
    let newID = await getUserId(searchInput);
    await fetchUserTweets(newID);
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
    setIncludesArray(await message.includes.users);
    return message;
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
          <p className='user'> {`Searching for ${searchInput}`}</p>

          {tweetsArray.map((tweet, index) => {
            let user = includesArray[index]?.username;
            let avatar = includesArray[index]?.profile_image_url;
            // let preview = includesArray[index]?. ;
            return (
              <Card
                key={tweet.id}
                className='card'
                style={{ width: 300 }}
                cover={<img alt='User' src={avatar} />}
                hoverable
                actions={[
                  <SettingOutlined key='setting' />,
                  <EditOutlined key='edit' />,
                  <EllipsisOutlined key='ellipsis' />,
                ]}>
                <Meta title={`@${user}`} description={tweet.text} />
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
