import '../styles/about.css';
import '../styles/App.css';
import '../styles/globals.css';
import '../styles/home.css';
import '../styles/search.css';
import '../styles/Sidebar.css';
import '../styles/welcome.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
