import Image from 'next/dist/client/image';
import './card.css';

export const Box = props => {
  const btnTest = async () => {
    const response = await fetch(`http://localhost:3000/boxtest`);
    const message = await response.json();
    console.log(message.answer);
  };
  return (
    <section className='card'>
      <Image className='avatar' src={props.avatar} alt='User Img' />
      <p className='user'> @{props.handle} </p>
      <div className='tweetContent'>
        <h2 className='tweetBody'>{props.tweet}</h2>
        <div className='mediaContent'>
          <Image src={props.media} alt='' />
        </div>
        <div className='buttons' onClick={() => btnTest()}>
          😀🦈📨🔤
        </div>
      </div>
    </section>
  );
};

export default Box;
