import React from 'react';
import Image from 'next/image';
import './card.css';

export const Timeline = props => {
  return (
    <section className='card'>
      <div className='tweetContent'>
        <h2 className='tweetBody'> {props.tweetBody} </h2>
        <h3 className='mediaKey'> {props.mediaKey} </h3>
        <h3 className='mediaURL'> {props.mediaURL} </h3>
        <div className='mediaContent'>
          <Image src={props.tweetMedia} alt='' />
        </div>
        <div className='buttons'>
          <button type='like'>😀</button>
          <button type='ReChirp'>🦈</button>
          <button type='Share'>📨</button>
          <button type='Comment'>🔤</button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
