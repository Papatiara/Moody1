import React, { Component } from 'react';
import background from './moody.png';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={background} className="App-logo" alt="logo" />
            <h2>Moody</h2>
      </div>
        <p className="App-intro">
          Moody is an interactive way to analyze sentiments behind the text. Enter any piece of text below and try it out!
       </p>
      <Input />
      </div>
    );
  }
}

export default App;
