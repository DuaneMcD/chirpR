import Image from 'next/dist/client/image';
import '../styles/card.css';

export const Card = props => {
  return (
    <section className='card'>
      <Image className='avatar' src={props.userAvatar} alt='User Img' />
      <p className='user'> @{props.tweetAuthor} </p>
      <div className='tweetContent'>
        <h2 className='tweetBody'> {props.tweetBody} </h2>
        <div className='mediaContent'>
          <Image src={props.tweetMedia} alt='' />
        </div>
        <div className='buttons'>
          <button type='like'>😀</button>
          <button type='ReChirrp'>🦈</button>
          <button type='Share'>📨</button>
          <button type='Comment'>🔤</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
