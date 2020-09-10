/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { RouteComponentProps, withRouter } from "react-router-dom";


type Props = RouteComponentProps & {
  value: string,
}


const ReviewText = ({ history, value }: Props) => {
  const handleEdit = () => {
    history.push('/');
  };
  const handleConfirm = () => {
    history.push('/loading');
  };

  return (
    <div css={styles.review}>
      <h1 css={styles.review_input}> Please review your text: </h1>
      <div css={styles.text_review}>
         {value} 
      </div>
      <div css={styles.buttons}>
        <button css={styles.review_button} onClick={handleConfirm}> Confirm </button>
        <button css={styles.review_button} onClick={handleEdit}> Edit </button>
      </div>
    </div>
  );
};

const styles = {
  review: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  review_input: css`
    text-align: center;
    font-weight: bold;
  `,
  text_review: css`
    margin: auto;
    width: 90%;
    border: 2px solid lightgrey;
    height: 300px;
    min-height: 300px: 
    font-size: 2em;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-word;

  `,
  review_value_added: css`
    width: 80%;
    text-align: center;
    margin: auto;
    font-size: 20px;
  `,
    buttons: css`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;

  `,
      review_button: css`
  {
    cursor:pointer;
    user-select: none;
    outline: none;
    pointer-events: auto;
    text-align: center;
    border-radius: 10%;
    width: 60px;
    height: 30px;
  }
  `,
};

export default withRouter(ReviewText);
