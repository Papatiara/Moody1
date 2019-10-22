import React, { Component } from 'react';
import './App.css';
import TextareaAutosize from 'react-autosize-textarea';
import Reviewtext from './Reviewtext';

class Input  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      hasValue: false,
      required: ""
    };
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    if (this.state.value.length < 20) {
      this.setState({required: "It's required to enter a text with at least 20 characters"});
     } else {
      this.setState({hasValue: true});
     }
   }
    
  handleClick(event) {
    console.log(this.state.required)
    if (this.state.required.length > 0) {
      this.setState({required: " "});
    }
  }
  
render() {
  if (this.state.hasValue === true) {
    return (
      <div>
        <Reviewtext value={this.state.value}/>
      </div>
    )
  }
    return (
  <div>
    <div>
      <p className="App-intro">
          Moody is an interactive way to analyze sentiments behind the text.
          Enter any piece of text below and try it out!
       </p>
    </div>
    <div className="wrapper">
      <form >
        <label>
          <TextareaAutosize className="text-area" value={this.state.value} onChange={this.handleChange} onClick={this.handleClick}/>
	  <p className="required-field"> {this.state.required} </p>
          <input className="input" value="Submit" onClick={this.handleSubmit}/>
        </label>
      </form>
    </div>
  </div>
    );
  }
}


export default Input;
