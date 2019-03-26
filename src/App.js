import React, { Component } from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom'
import home from './pages/home'
import signin from './pages/signin'
import signup from './pages/signup'
import './App.css';

class App extends Component {
  render() {
    return (
          <HashRouter>
            <div className="App">
              <h1> Single Page User Authentication Demo</h1>
                <div className='menu-bar'>
                  <p> <NavLink exact to={'/home'} > Home </NavLink></p>
                  <p> <NavLink to={'/signin'} > Sign In </NavLink></p>
                  <p> <NavLink to={'/signup'} > Sign Up </NavLink></p>
                </div>
            </div>

            <div className="content">
              <Route path='/home' component={home} />
              <Route path='/signin' component={signin} />
              <Route path='/signup' component={signup} />
            </div>
          </HashRouter>
    );
  }
}

export default App;
