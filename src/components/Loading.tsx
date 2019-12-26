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
    display: inline-block;
    width: 64px;
    height: 64px;
    margin-left: 33.33%;
    margin-right: 33.33%;
    margin-top: 20%;
    & div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 6px solid #fff;
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
