/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import {RouteComponentProps, withRouter} from "react-router-dom";


type Props = RouteComponentProps & {
  value: string,
}


const ReviewText = ({history, value}: Props)=> {
  const handleEdit = () => {
    history.push('/');
  };
  const handleConfirm = () => {
    history.push('/loading');
  };

  return (
    <div>
      <h1 css={styles.review_input}> Please review your text: </h1>
      <p css={styles.review_value_added}> {value} </p>
      <input css={styles.review_button} value="Confirm" onClick={handleConfirm} />
      <input css={styles.review_button} value="Edit" onClick={handleEdit} />
    </div>
  );
};

const styles = {
  review_input: css`
    text-align: left;
    font-weight: bold;
    font-size: 20px;
    margin-left: 20%;
    margin-top: 5%;
  `,
  review_value_added: css`
    text-align: left;
    font-size: 20px;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 5%;
  `,
  review_button: css`
    border: 2px solid lightgray;
    width: 50px;
    left: 70px;
    right: 30px;
    margin-left: 20%;
    cursor: pointer;
    &:hover {
      border: 2px inset lightgreen;
      color: green;
    }
  `,
};

export default withRouter(ReviewText);
