import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4> Single Page User Authentication Demo</h4>
          <p> <a href={'/'} > Home </a></p>
          <p> <a href={'/signin'} > Sign In </a></p>
          <p> <a href={'/signup'} > Sign Up </a></p>

      </div>
    );
  }
}

export default App;
