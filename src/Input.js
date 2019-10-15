import React, { Component } from 'react';
import './App.css';
import TextareaAutosize from 'react-autosize-textarea';
import Reviewtext from './Reviewtext';

class Input  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      hasValue: false
    };
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);
  }
	handleChange(event) {
	  this.setState({value: event.target.value});
  }

  handleSubmit(event){
    if (this.state.value.length === 0) {
      alert('The input requires a value');
     } else {
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
    <div className="wrapper">
      <form >
        <label>
          <TextareaAutosize className="text-area" value={this.state.value} onChange={this.handleChange} />
          <input className="input" value="Submit" onClick={this.handleSubmit}/>
        </label>
      </form>
    </div>
    );
  }
}


export default Input;
