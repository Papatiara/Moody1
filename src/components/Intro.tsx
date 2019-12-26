/** @jsx jsx */

import { css, keyframes, jsx } from '@emotion/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import TextAreaInput from './TextAreaInput';

type Props = RouteComponentProps & {
  setTextBlob: (value: string) => void;
};

const Intro = ({ history, setTextBlob }: Props) => {
  const handleSubmit = (value: string): void => {
    setTextBlob(value);
    history.push('/review');
  };
  return (
    <div css={styles.intro_content}>
      <div css={styles.intro_description}>
        Moody is an interactive way to analyze sentiment behind text. Enter any text and try it out!
      </div>
      <TextAreaInput onSubmit={handleSubmit} />
    </div>
  );
};

const fadeText = keyframes` {
  0% {
    color: #C7F0D8;
  }
  50% {
  color: #324038;
  }
  100% {
    color: #AEC7EC;
  }
}
`;

const styles = {
  intro_content: css`
    display: flex;
    justify-content: space-around;
    clear: left;
    pointer-events:none;
    overflow: hidden;
  `,
  intro_description: css`
    margin-top: 10%;
    margin-left: 15%;
    margin-right: 20%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    animation: ${fadeText} 5s ease infinite;
  `,
};

export default withRouter(Intro);
