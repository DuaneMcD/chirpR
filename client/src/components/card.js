import React from 'react';
import './card.css';

export const Card = props => {
  return (
    <section className='card'>
      <img className='avatar' src={props.avatar} alt='User Img' />
      <p className='user'> @{props.handle} </p>
      <div className='tweetContent'>
        <h2 className='tweetBody'>{props.tweet}</h2>
        <div className='mediaContent'>
          <img src={props.media} alt='' />
        </div>
        <div className='buttons'>😀🦈📨🔤</div>
      </div>
    </section>
  );
};

export default Card;
