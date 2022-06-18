import React, { useState, useRef } from 'react';
import { CaretDownFilled } from '@ant-design/icons';
import Image from 'next/dist/client/image';

const Accordion = props => {
  const [active, setActive] = useState(true);
  const [display, setDisplay] = useState('inherit');
  const [caret, setCaret] = useState('caret-rotate');
  const [scrollStart, setScrollStart] = useState();
  const [dragtoScroll, setDragtoScroll] = useState(false);
  const tweetScrollRef = useRef();

  const toggleAccordion = () => {
    setActive(!active);
    setDisplay(active ? 'inherit' : 'none');
    setCaret(active ? 'caret-rotate' : 'caret');
  };

  const handleTimeStamp = dateString => {
    let timestamp = new Date(dateString);
    return timestamp.toDateString();
  };
  const dragScroll = e => {
    // if (dragtoScroll == true) {
    tweetScrollRef.current.scrollTop =
      tweetScrollRef.current.scrollTop + (scrollStart + e.target.clientY);
    // }
  };

  return (
    <>
      <div className='accordion'>
        <button
          className={`accordion-btn ${active} `}
          onClick={toggleAccordion}>
          <Image
            src={props.imageSRC}
            alt='User avatar'
            placeholder='empty'
            width={75}
            height={75}
            quality={100}
            className='userAvatar'
          />
          <p className='title'>{props.title}</p>
          <div className='caret-container'>
            <CaretDownFilled className={caret} />
          </div>
        </button>
        <div
          style={{ display: `${display}` }}
          className='accordion-content'
          ref={tweetScrollRef}
          onDrag={e => dragScroll(e)}
          onMouseDown={e => {
            setScrollStart(e.clientY), setDragtoScroll(true);
          }}
          onMouseUp={() => {
            setDragtoScroll(false);
            setScrollStart(null);
          }}>
          {props.userStream?.map(tweet => (
            <div className='single-tweet' key={tweet.id}>
              <p className='time-stamp'>{`${handleTimeStamp(
                tweet.created_at
              )}`}</p>
              <p className='accordion-tweets'>{tweet.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
