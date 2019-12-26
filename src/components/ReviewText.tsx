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
      <button css={styles.review_button} onClick={handleConfirm}> Confirm </button>
      <button css={styles.review_button} onClick={handleEdit}> Edit </button>
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
  {
    cursor:pointer;
    margin-left: 20%;
    user-select: none;
    outline: none;
    pointer-events: auto;
    text-align: center;
  }
  `,
};

export default withRouter(ReviewText);
