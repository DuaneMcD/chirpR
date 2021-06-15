import React, { useState, useEffect, useRef } from 'react';
import { CaretDownFilled } from '@ant-design/icons';

const Accordion = props => {
  const [active, setActive] = useState([]);
  const [display, setDisplay] = useState('none');
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setActive(!active);
    setDisplay(active ? 'inherit' : 'none');
  };

  return (
    <>
      <div className='accordion'>
        <button
          className={`accordion-btn ${active} `}
          onClick={toggleAccordion}>
          <p className='title'>{props.title}</p>
          <CaretDownFilled className={active ? 'caret' : 'caret-rotate'} />
        </button>
        <div
          ref={contentRef}
          style={{ display: `${display}` }}
          className='accordion-content'>
          {props.userStream?.map((tweet, index) => (
            <p className='accordion-tweets'>{tweet.text}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
