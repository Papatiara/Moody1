import React, { Component } from 'react';
import background from './moody.png';
import './App.css';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
            <h3 className="App-title"> Moody</h3>
            <h3 className="App-contact">Contact</h3>
      </div>
        <p className="App-intro">
          Moody is an interactive way to analyze sentiments behind the text.
          
          Enter any piece of text below and try it out!
       </p>
      <Input />
      </div>
    );
  }
}

export default App;
