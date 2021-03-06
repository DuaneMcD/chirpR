import Duane from '../components/images/duane.jpg';
import Image from 'next/image';

const about = () => {
  return (
    <div className='aboutPage'>
      <div className='about'>
        <h1 className='aboutH1'>Chirpr | Built by Duane McDonald</h1>
        <h2 className='aboutH2'>
          Chirpr is an app experimenting with the Twitter Standard API 2 and web
          scraping. Chirpr uses realtime tweets & streams from twitter users.
        </h2>
        <section className='section2'>
          <div className='aboutApp'>
            <h2>Built with:</h2>
            <ul>
              <li>Next.js</li>
              <li>Twitter API 2.0</li>
              <li>Puppeteer.js</li>
              <li>CSS Animation</li>
              <li>Heroku Hosting</li>
              <li>HTML 5</li>
              <li>Git</li>
            </ul>
          </div>
          <div className='aboutDuane'>
            <Image
              layout='responsive'
              className='duaneImg'
              src={Duane}
              alt='Duane McDonald'
            />
            <h2>Duane McDonald</h2>
            <h3>Software Engineer</h3>
            <div className='links'>
              <a
                className='link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/DuaneMcD'>
                Github.com/DuaneMcD
              </a>
              <a
                className='link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://DuaneMcDonald.com'>
                DuaneMcDonald.com
              </a>
              <a
                className='link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/duane-mcd'>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default about;
