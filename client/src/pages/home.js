import React, { useState } from 'react';
import Card from '../components/card';

const Home = () => {
  const [tweetAuthor, setTweetAuthor] = useState([]);
  const [authorId, setAuthorId] = useState([]);
  const [tweetBody, setTweetBody] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [tweetMedia, setTweetMedia] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const btnTest = async () => {
    const response = await fetch(`http://localhost:3000/tweet`);
    const message = await response.json();
    setTweetBody(await message.data.text);
    setTweetAuthor(await message.includes.users[0].username);
    setAuthorId(await message.data.author_id);
    setTweetMedia(await message.includes.media);
  };

  return (
    <div>
      <button onClick={btnTest}>Load A Tweet</button>
      <div className='cardContainer'>
        <Card
          className='card'
          tweetAuthor={tweetAuthor}
          authorId={authorId}
          tweetBody={tweetBody}
          userAvatar={userAvatar}
          tweetMedia={tweetMedia}
          searchTerm={searchTerm}
        />
      </div>
    </div>
  );
};

export default Home;
