import React, { Component } from 'react';

class Reviewtext  extends React.Component {
  constructor(props) {
    super(props);
      console.log('onreview',props)

  }

render() {
    return (
      <div>
        <div>
        </div>
        <h1> Please review your text: </h1>
           <p> {this.props.value} </p>
      </div>
    );
  }
}

export default Reviewtext;
