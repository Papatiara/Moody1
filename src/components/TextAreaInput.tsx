/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import TextareaAutosize from 'react-autosize-textarea';

type Props = {
  onSubmit: (value: string) => void;
  contenteditable?: boolean;
  autoFocus?: boolean;
};
const iV = 'Type or paste your text';
const MINIMUM_CHARACTER_COUNT = 20;
const MORE_CHARACTERS_REQUIRED_MESSAGE = 'Enter a text with at least 20 characters.';
const isTooShort = (value: string) => value.length < MINIMUM_CHARACTER_COUNT;

const TextAreaInput = ({ onSubmit }: Props) => {
  const [value, setValue] = useState('');
  const [iV, setiV] = useState('Type or paste your text');
  const [validationWarning, setValidationWarning] = useState('');

  // Consider validation of event.target.value
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    const text = event.currentTarget.value;
    setValue(text);
    if (text === '') {
      setiV('Type or paste your text');
    } else {
      setiV('');
    }
  };
  const handleSubmit = (): void => {
    if (isTooShort(value)) {
      setValidationWarning(MORE_CHARACTERS_REQUIRED_MESSAGE);
    } else {
      onSubmit(value);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLTextAreaElement>): void => {
    if (validationWarning) {
      setValue(event.currentTarget.value);
      setValidationWarning('');
    }
  };

  return (
    <div css={styles.textArea_content_item}>
      <div css={styles.textArea_form}>{iV}</div>
      <TextareaAutosize
        contentEditable={true}
        css={styles.cursor}
        autoFocus={true}
        onClick={handleClick}
        onChange={handleChange}
      />

      <p css={styles.textArea_required_field}>{validationWarning}</p>
      <input css={styles.textArea_submit_button} value="Submit" onClick={handleSubmit} />
    </div>
  );
};

const styles = {
  cursor: css`
     {
      position:absolute;
      left: 10%;
      top: 15%;
      z-index: -1;
      width: 60%;
      height: 50%;
      font-weight: 400;
      font-family: Akkurat Std, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Helvetica Neue, sans-serif, Arial;
      -webkit-font-smoothing: antialiased;
      font-size: 15px;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-word;
      color: black;
      border-color: white;
      outline: none;
      border: none;
    }
  `,
  textArea_content_item: css`
     {
      position: fixed;
      right: 0%;
      width: 50%;
      height: 100%;
    }
  `,
  textArea_form: css`
     {
      position: absolute;
      top: 15%;
      left: 13%;
      font-weight: 400;
      font-family: Akkurat Std, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Helvetica Neue, sans-serif, Arial;
      -webkit-font-smoothing: antialiased;
      font-size: 15px;
      color: #97a0bf;
      outline: none;
      pointer-events: none;
      user-select: none;
    }
  `,
  textArea_required_field: css`
     {
      position: absolute;
      top: 17%;
      left: 13%;
      font-size: 11px;
      color: red;
    }
  `,
  textArea_submit_button: css`
     {
      border: 2px solid lightgray;
      top: 20px;
      margin-left: 60%;
      margin-top: 20%;
      width: 60px;
      height: 10px;
      padding: 5px;
      text-align: center;
      font-size: 10px;
      outline: none;
      cursor: pointer;
    }
  `,
};

export default TextAreaInput;
