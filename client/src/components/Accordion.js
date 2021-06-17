import React, { useState } from 'react';
import { CaretDownFilled } from '@ant-design/icons';

const Accordion = props => {
  const [active, setActive] = useState([]);
  const [display, setDisplay] = useState('none');
  const [caret, setCaret] = useState('caret');

  const toggleAccordion = () => {
    setActive(!active);
    setDisplay(active ? 'inherit' : 'none');
    setCaret(active ? 'caret-rotate' : 'caret');
  };

  return (
    <>
      <div className='accordion'>
        <button
          className={`accordion-btn ${active} `}
          onClick={toggleAccordion}>
          <p className='title'>{props.title}</p>
          <CaretDownFilled className={caret} />
        </button>
        <div style={{ display: `${display}` }} className='accordion-content'>
          {props.userStream?.map((tweet, index) => (
            <div className='single-tweet'>
              <p className='time-stamp'>{`${new Date(
                tweet.created_at
              ).getMonth()}/${new Date(tweet.created_at).getDate()}/${new Date(
                tweet.created_at
              ).getFullYear()} 
              ${new Date(tweet.created_at).getHours()}:${new Date(
                tweet.created_at
              ).getMinutes()}`}</p>
              <p className='accordion-tweets'>{tweet.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
