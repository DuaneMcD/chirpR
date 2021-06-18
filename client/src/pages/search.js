import React, { useState } from 'react';
import Navbar from '../components/Navbar';
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
      {/* <Navbar /> */}
      <div className='searchPage'>
        <div className='searchContainer'>
          <Search
            className='antSearchBar'
            placeholder='input search text'
            onSearch={handleSearch}
            onChange={e => setSearchInput(e.target.value)}
            enterButton
            size='large'
          />
        </div>
        <div className='cardContainer'>
          {searchInput === '' ? (
            <div className='noSearch'>
              <p>Search For Someone</p>
              <img src={bigBird} alt='Chirpr Logo' />
            </div>
          ) : (
            tweetsArray.map((tweet, index) => {
              let user = includesArray[index]?.username;
              let avatar = includesArray[index]?.profile_image_url;
              return (
                <div className='searchResults'>
                  <Card
                    hoverable
                    key={tweet.id}
                    className='card'
                    cover={<img alt='User' src={avatar} />}>
                    <Meta title={`@${user}`} description={tweet.text} />
                    <div className='buttons'>
                      <SettingOutlined className='setting' key='setting' />
                      <EditOutlined className='edit' key='edit' />
                      <EllipsisOutlined className='ellipsis' key='ellipsis' />
                    </div>
                  </Card>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
