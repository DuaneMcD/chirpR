import React from 'react';
import Card from '../components/card';

const search = () => {
  return (
    <div>
      <input type='text' name='search' id='search' />
      <div className='cardContainer'>
        <Card
          className='card'
          // avatar={birdGif}
          // handle='bigTweetr'
          // tweet={testTweet}
          // media={freedom}
        />
      </div>
    </div>
  );
};

export default search;
