function ScrollButtons({ scrollHomeTweets }) {
  return (
    <div className='moreUsers'>
      <div className='scrollButtons'>
        <button className='scrollLeft' onClick={() => scrollHomeTweets('left')}>
          ⬅
        </button>
        <button
          className='scrollRight'
          onClick={() => scrollHomeTweets('right')}>
          ➡
        </button>
      </div>
    </div>
  );
}

export default ScrollButtons;
