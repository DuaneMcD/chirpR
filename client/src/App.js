import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import About from './pages/about';
import Welcome from './pages/welcome';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Switch>
          <Route className='page-content' path='/' exact component={Welcome} />
          <Route className='page-content' path='/home' exact component={Home} />
          <Route
            className='page-content'
            path='/search'
            exact
            component={Search}
          />
          <Route
            className='page-content'
            path='/about'
            exact
            component={About}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
