import React, { Component } from 'react';
import axios from 'axios';
import Charts from './Charts';


class Request  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasData: false
    };

axios({
    "method":"GET",
    "url":"https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"twinword-emotion-analysis-v1.p.rapidapi.com",
    "x-rapidapi-key":"ba3939f548msh7e1832534609b98p1b8a86jsn283ddb34a08c"
    },"params":{
    "text":"After living abroad for such a long time, seeing my family was the best present I could have ever wished for."
    }
    })
    .then((response)=>{
	  let emotions = response.data.emotion_scores
	  this.setState({data : [
  { name: 'Joy', value: Math.ceil(emotions['joy']) }, { name: 'Disgust', value: Math.ceil(emotions['disgust']) },
  { name: 'Sadness', value: Math.ceil(emotions['sadness']) }, { name: 'Anger', value: Math.ceil(emotions['anger']) },
  { name: 'Surprise', value: Math.ceil(emotions['surprise']) }, { name: 'Fear', value: Math.ceil(emotions['fear']) },
],
hasData: true
})

    })
    .catch((error)=>{
      console.log(error)
    })
}

  render() {
	if (this.state.hasData === true) { 
    return (
    <div>
     <Charts data={this.state.data} />
      </div>
    );
  }
  return (
  <div className="Request-loading-ring">
  <div>
  </div>
  <div></div>
  <div></div>
  <div></div>
  </div>
  );
}

}

export default Request;
