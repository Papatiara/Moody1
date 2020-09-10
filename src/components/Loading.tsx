/** @jsx jsx */

import { css, keyframes, jsx } from '@emotion/core';

const Loading = () => {
  return (
    <div css={styles.loading_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
   `;

const styles = {
  loading_ring: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 100%;
    & div {
      // box-sizing: border-box;
      // display: block;
      position: absolute;
      margin-top: 50%;
      width: 51px;
      height: 51px;
      // margin: 6px;
      border: 8px solid black;
      border-radius: 50%;
      animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #dfc transparent transparent transparent;
    }
    & div:nth-child(1) {
      animation-delay: -0.45s;
    }
    & div:nth-child(2) {
      animation-delay: -0.3s;
    }
    & div:nth-child(3) {
      animation-delay: -0.15s;
    }
  `,
};

export default Loading;
