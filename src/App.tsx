import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './components/Intro';
import Header from './components/Header';
import ReviewText from './components/ReviewText';
import Request from './components/Request';
import Charts from './components/Charts';
import SentimentAnalysis from './domain/SentimentAnalysis';

const App = () => {
  const [textBlob, setTextBlob] = useState('');
  const [sentimentAnalysis, setSentimentAnalysis] = useState<SentimentAnalysis[]>([]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/review">
          <ReviewText value={textBlob} />
        </Route>
        <Route exact path="/">
          <Intro setTextBlob={setTextBlob} />
        </Route>
        <Route path="/loading">
          <Request finalValue={textBlob} setSentimentAnalysis={setSentimentAnalysis} />
        </Route>
        <Route path="/charts">
          <Charts value={sentimentAnalysis} setTextBlob={setTextBlob} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
