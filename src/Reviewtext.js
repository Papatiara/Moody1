import React, { Component } from 'react';
import Intro from './Intro';
import Request from './Request';


class Reviewtext  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: undefined,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleEdit() {
    this.setState({edit: true});
  }
  handleConfirm() {
    this.setState({edit: false});
  }
render() {
  if (this.state.edit === true) {
    return (
      <div>
        <Intro />
      </div>
    )
  }
   if (this.state.edit === false) {
    return (
      <div>
        <Request input={this.props.value}/>
      </div>
    )
  }
  return (
    <div>
      <h1 className="Review-input"> Please review your text: </h1>
      <p className="Review-value-added"> {this.props.value} </p>
      <input className="Review-button Review-confirm-button" value="Confirm" onClick={this.handleConfirm}/>
      <input className="Review-button Review-edit-button" value="Edit" onClick={this.handleEdit}/>
    </div>
  );
  }
}

export default Reviewtext;
