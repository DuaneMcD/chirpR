import React from 'react';
import './card.css';

export const Card = props => {
  return (
    <section className='card'>
      <img className='avatar' src={props.userAvatar} alt='User Img' />
      <p className='user'> @{props.tweetAuthor} </p>
      <div className='tweetContent'>
        <h2 className='tweetBody'> {props.tweetBody} </h2>
        <div className='mediaContent'>
          <img src={props.tweetMedia} alt='' />
        </div>
        <div className='buttons'>
          <button type='like'>😀</button>
          <button type='ReChirrp'>🦈</button>
          <button type='Share'>📨</button>
          <button type='Comment'>🔤</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
