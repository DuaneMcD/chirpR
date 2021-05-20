import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Search from './pages/search';
import About from './pages/about';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={Search} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
