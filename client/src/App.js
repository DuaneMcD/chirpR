import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import About from './pages/about';
import Welcome from './pages/welcome';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/home' exact component={Home} />
          <Route path='/search' exact component={Search} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
