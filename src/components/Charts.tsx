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
  const tryItAgain = (event: React.MouseEvent<HTMLInputElement>): void => {
    setTextBlob('');
    history.push('/');
  };

  return (
    <div css={styles.charts_item}>
      <BarChart width={600} height={300} data={value}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="value" fill="#8884d8" barSize={30} />
      </BarChart>
      <input css={styles.charts_button} value="Try it again" onClick={tryItAgain} />{' '}
    </div>
  );
};
const styles = {
  charts_item: css`
    margin-top: 10%;
    margin-left: 33.33%;
    margin-right: 33.33%;
    top: 10%;
  `,
  charts_button: css`
    border: 2px solid lightgray;
    width: 65px;
    left: 70px;
    right: 30px;
    margin-left: 20%;
    text-align: center;
    cursor: pointer;
    &:hover {
      border: 2px inset lightgreen;
      color: green;
    }
  `,
};

export default withRouter(Charts);
