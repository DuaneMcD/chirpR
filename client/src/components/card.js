import React, { useState, useEffect } from 'react';
import './card.css';

export const Card = props => {
  const [tweetAuthor, setTweetAuthor] = useState([]);
  const [authorId, setAuthorId] = useState([]);
  const [tweetBody, setTweetBody] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [tweetMedia, setTweetMedia] = useState([]);
  const btnTest = async () => {
    const response = await fetch(`http://localhost:3000/tweet`);
    const message = await response.json();
    setTweetBody(await message.data.text);
    setTweetAuthor(await message.includes.users[0].username);
    setAuthorId(await message.data.author_id);
    setTweetMedia(await message.includes.media);
  };
  const handleUserImg = async AuthorId => {
    const response = await fetch(`http://localhost:3000/user/${AuthorId}`);
    const message = await response.json();
    setUserAvatar(await message.profile_image_url);
  };

  useEffect(() => {
    console.log(tweetAuthor);
  }, [tweetAuthor]);
  useEffect(() => {
    console.log(authorId);
    handleUserImg(authorId);
  }, [authorId]);
  useEffect(() => {
    console.log(tweetBody);
  }, [tweetBody]);
  useEffect(() => {
    console.log(userAvatar);
  }, [userAvatar]);
  useEffect(() => {
    console.log(tweetMedia);
  }, [tweetMedia]);

  return (
    <section className='card'>
      <img className='avatar' src={userAvatar} alt='User Img' />
      <p className='user'> @{tweetAuthor} </p>
      <div className='tweetContent'>
        <h2 className='tweetBody'> {tweetBody} </h2>
        <div className='mediaContent'>
          <img src={tweetMedia} alt='' />
        </div>
        <div className='buttons' onClick={() => btnTest()}>
          😀🦈📨🔤
        </div>
      </div>
    </section>
  );
};

export default Card;
