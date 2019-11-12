import React, { Component } from 'react';
import './App.css';
import TextareaAutosize from 'react-autosize-textarea';
import Reviewtext from './Reviewtext';

class Intro  extends React.Component {
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
      this.setState({required: "Enter a text with at least 20 characters"});
     } else {
      this.setState({hasValue: true});
     }
   }
    
  handleClick(event) {
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
        <div className="Intro-content">
          <div className="Intro-content-item Intro-description">
              Moody is an interactive way to analyze sentiments behind the text.
              Enter any piece of text and try it out!
          </div>
          <div className="Intro-content-item">
            <TextareaAutosize className="Intro-form" value={this.state.value} onChange={this.handleChange} onClick={this.handleClick}/>
            <p className="Intro-required-field"> {this.state.required} </p>
            <input className="Intro-submit-button" value="Submit" onClick={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}


export default Intro;
