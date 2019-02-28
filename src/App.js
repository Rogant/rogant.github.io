import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Under construction... <span className="App-blinking">|</span>
          </p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/rogant/"
          >
            In the mind time visit my Linkedin
          </a>
          <a
            className="App-link" 
            href="mailto:me@andresvargas.dev"
          > 
            or send me an email: me@andresvargas.dev
          </a>
        </header>
      </div>
    );
  }
}

export default App;
