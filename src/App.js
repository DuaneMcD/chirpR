import './App.css';
import Card from './components/card';
import Navbar from './components/Navbar';
import freedom from './images/freedom.gif';
import birdGif from './images/birdGif.gif';

function App() {
  const testTweet = 'Imma make it Tweet! 🐔🦚';

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
