import React, { useState } from 'react';

const Accordion = props => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <div className='container'>
      <div className='wrap' onClick={() => toggle(props.index)} key={props.key}>
        <h1>@{props.username}</h1>
        <span>{clicked === props.index ? 'Hide' : 'Show'}</span>
      </div>
      {clicked === props.index ? (
        <div className='dropdown'>
          {/* {props.tweet.map(tweet => (
            <p>tweet</p>
          ))} */}
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
