import React, { Component } from 'react';
import './App.css';
import TextareaAutosize from 'react-autosize-textarea';
import Reviewtext from './Reviewtext';

class Input  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: " ",
      hasValue: false
    };
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);
  }
	handleChange(event) {
    console.log(event.target.value)
	  this.setState({value: event.target.value});
  }

  handleSubmit(event){
    console.log(this.state.value)
    if (this.state.value) {
	  this.setState({hasValue: true});
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
      <form >
        <label>
          <TextareaAutosize value={this.state.value} onChange={this.handleChange}/>
        </label>
      </form>
      <input value="Submit" onClick={this.handleSubmit}/>
    </div>
    );
  }
}


export default Input;
