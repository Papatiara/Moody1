/** @jsx jsx */

import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import SentimentAnalysis from '../domain/SentimentAnalysis';

type Props = RouteComponentProps & {
  setTextBlob: (value: string) => void;
  value: SentimentAnalysis[];
};
const Charts = ({ history, setTextBlob, value }: Props) => {
  const tryItAgain = (): void => {
    setTextBlob('');
    history.push('/');
  };

  return (
    <div css={styles.charts_item}>
      <BarChart width={400} height={300} data={value}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="value" fill="#8884d8" barSize={30} />
      </BarChart>
      <button css={styles.charts_button} onClick={tryItAgain}> Try it again</button>
    </div>
  );
};
const styles = {
  charts_item: css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

  `,
  charts_button: css`
    border: 2px solid lightgrey;
    text-align: center;
    cursor: pointer;
    &:hover {
      border: 2px inset lightgreen;
      color: green;
    }
  `,
};

export default withRouter(Charts);
