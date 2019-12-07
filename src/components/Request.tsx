import React, { useEffect } from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";
import axios from 'axios';
import Loading from './Loading'
import SentimentAnalysis from '../domain/SentimentAnalysis'


type Props = RouteComponentProps & {
  finalValue: string,
  setSentimentAnalysis: (value: SentimentAnalysis[]) => void,
}

const Request = ({history, finalValue, setSentimentAnalysis }: Props) => {
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'twinword-emotion-analysis-v1.p.rapidapi.com',
        'x-rapidapi-key': 'ba3939f548msh7e1832534609b98p1b8a86jsn283ddb34a08c',
      },
      params: {
        text: finalValue,
      },
    })
    .then(response => {
      let emotions = response.data.emotion_scores;
      setSentimentAnalysis([
        { name: 'Joy', value: Math.ceil(emotions['joy'] * 1000) },
        { name: 'Disgust', value: Math.ceil(emotions['disgust'] * 1000) },
        { name: 'Sadness', value: Math.ceil(emotions['sadness'] * 1000) },
        { name: 'Anger', value: Math.ceil(emotions['anger'] * 1000) },
        { name: 'Surprise', value: Math.ceil(emotions['surprise'] * 1000) },
        { name: 'Fear', value: Math.ceil(emotions['fear'] * 1000) },
      ]);
      console.log(finalValue);
      history.push('/charts');
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
     <Loading />
    </div>
  );
};

export default withRouter(Request);
