import React, { Component } from 'react';
import background from './moody.png';
import './App.css';
import Intro from './Intro';


class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h3 className="App-header-title" onClick={() => window.location.reload(false)}> Moody</h3>
          <h3 className="App-header-contact-info">Contact</h3>
        </div>
        <Intro />
      </div>
    );
  }
}

export default App;
