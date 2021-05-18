import React, { useState, useEffect } from 'react';
import Card from './components/card';
import Navbar from './components/Navbar';
import freedom from './images/freedom.gif';
import birdGif from './images/birdGif.gif';
import Axios from 'axios';
import './App.css';

function App() {
  const testTweet = 'Imma make it Tweet! 🐔🦚';
  const token =
    'AAAAAAAAAAAAAAAAAAAAAHwhPgEAAAAA1UgvX4LIPR7m2ornJszRmD4iJ3c%3DYzQIu3Henyxr7TcvlRfkKZ14ZzFOxd5LJ7C10nZfmFKdzBIBbg';
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const tweets = useState([]);

  // useEffect(() => {
  //   const fetchTweets = async () => {
  //     let response = await Axios.get(
  //       `https://api.twitter.com/2/tweets/1392679066528931847?expansions=attachments.media_keys,author_id`,
  //       config,
  //       function (req, res) {
  //         res.header('Access-Control-Allow-Origin', '*');
  //       }
  //     );
  //     console.log(response);
  //   };
  //   fetchTweets();
  // }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className='cardContainer'>
        <Card
          className='card'
          avatar={birdGif}
          handle='bigTweetr'
          tweet={testTweet}
          media={freedom}
        />
      </div>
    </div>
  );
}

export default App;
