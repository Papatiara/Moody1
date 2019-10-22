import React, { Component } from 'react';
import background from './moody.png';
import './App.css';
import Input from './Input';


class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
            <h3 className="App-title" onClick={() => window.location.reload(false)}> Moody</h3>
            <h3 className="App-contact">Contact</h3>
      </div>
      <Input />
      </div>
    );
  }
}

export default App;
