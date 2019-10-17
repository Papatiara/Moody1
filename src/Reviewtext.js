import React, { Component } from 'react';
import Input from './Input';

class Reviewtext  extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      edit: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    this.setState({edit: true});
  }
render() {
  if (this.state.edit === true) {
    return (
      <div>
        <Input />
      </div>
    )
  }
  return (
    <div>
      <h1 className="reviewText"> Please review your text: </h1>
      <p className="input-value"> {this.props.value} </p>
      <input className="edit" value="Confirm"/>
      <input className="confirm" value="Edit" onClick={this.handleEdit}/>
    </div>
  );
  }
}

export default Reviewtext;
