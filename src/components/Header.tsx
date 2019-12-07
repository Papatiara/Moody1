/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const Header = () => (
  <div css={styles.app_header}>
    <Link to="/">
      <h3 css={styles.app_header_title}>Moody</h3>
    </Link>
    <h3 css={styles.app_header_contact_info}>Contact</h3>
  </div>
);

const styles = {
  app_header: css`
    background-color: #87d1a5;
    height: 40px;
    padding: 10px;
    color: white;
  `,
  app_header_title: css`
    float: left;
    margin-top: 10px;
    margin-left: 5%;
    font-size: 20px;
    cursor: pointer;
    color: white;
  `,
  app_header_contact_info: css`
    float: right;
    margin-right: 5%;
    margin-top: 10px;
    font-size: 20px;
    cursor: pointer;
  `,
};

export default Header;
