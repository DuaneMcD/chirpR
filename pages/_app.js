import '../styles/about.css';
import '../styles/app.css';
import '../styles/globals.css';
import '../styles/home.css';
import '../styles/search.css';
import '../styles/sidebar.css';
import '../styles/welcome.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
