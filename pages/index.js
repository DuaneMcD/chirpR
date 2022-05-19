import Head from 'next/head';
import Link from 'next/dist/client/link';
import Sidebar from '../components/Sidebar';

export default function Index() {
  return (
    <>
      <Head>
        <title>Chirpr</title>
        <meta name='author' content='Duane McDonald' />
        <meta name='description' content='Chirpr top tweet dashboard' />
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='modal'>
        <h2>Welcome To Chirpr</h2>
        <label id='username-label' htmlFor='username'>
          Username
        </label>
        <input id='username' type='text' />
        <label id='password-label' htmlFor='password'>
          Password
        </label>
        <input id='password' type='text' />

        <Link className='browseAsGuest' href='/home'>
          Browse as Guest
        </Link>
      </main>
    </>
  );
}
