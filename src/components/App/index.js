import React from 'react';
import { Route } from 'react-router-dom';
import './styles.css';
import Header from '../Header';
import Home from '../Home';
import News from '../News';
import Login from '../Login';
import Secured from '../Secured';

const App = () => (
  <div className="App">
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/news" component={News} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={Secured} />
  </div>
);

export default App;
