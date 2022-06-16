function ScrollButtons(props) {
  return (
    <div className='moreUsers'>
      <div className='scrollButtons'>
        <button className='scrollLeft' onClick={props.onClick('left')}>
          ⬅
        </button>
        <button className='scrollRight' onClick={props.onClick('right')}>
          ➡
        </button>
      </div>
    </div>
  );
}

export default ScrollButtons;
