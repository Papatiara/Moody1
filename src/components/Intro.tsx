/** @jsx jsx */

import { css, keyframes, jsx } from '@emotion/core';
import {RouteComponentProps, withRouter} from "react-router-dom";
import TextAreaInput from './TextAreaInput';

type Props = RouteComponentProps & {
  textBlob: string,
  setTextBlob: (value: string) => void,
}

const Intro = ({history, textBlob, setTextBlob}:Props) => {
  const handleSubmit = (value: string): void => {
    setTextBlob(value);
    history.push('/review'); 
  }
  return (
    <div css={styles.intro_content}>
        <div css={styles.intro_description}>
        Moody is an interactive way to analyze sentiment behind text. Enter any text and try it out!
      </div>
      <TextAreaInput initialValue={textBlob} onSubmit={handleSubmit} />
    </div>
  );
};

const fadeText = keyframes ` {
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
    text-align: center;
  `,
  intro_description: css`
    position: fixed;
    left: 10%;
    width: 30%;
    top: 25%;
    font-weight: bold;
    font-size: 25px;
    animation: ${fadeText} 5s ease infinite;
  `,
};

export default withRouter(Intro);
