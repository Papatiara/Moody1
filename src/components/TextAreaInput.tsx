/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import TextareaAutosize from 'react-autosize-textarea';

type Props = {
  onSubmit: (value: string) => void;
  contenteditable?: boolean;
  autoFocus?: boolean;
};
const MINIMUM_CHARACTER_COUNT = 20;
const MORE_CHARACTERS_REQUIRED_MESSAGE = 'Enter a text with at least 20 characters.';
const isTooShort = (value: string) => value.length < MINIMUM_CHARACTER_COUNT;

const TextAreaInput = ({ onSubmit }: Props) => {
  const [value, setValue] = useState('');
  const [validationWarning, setValidationWarning] = useState('');

  // Consider validation of event.target.value
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    const text = event.currentTarget.value;
    setValue(text);
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
      <TextareaAutosize
        contentEditable={true}
        css={styles.cursor}
        autoFocus={true}
        placeholder='Type or paste your text'
        onClick={handleClick}
        onChange={handleChange}
      />
      <div>
      <p css={styles.textArea_required_field}>{validationWarning}</p>
      <button 
css={styles.textArea_submit_button} onClick={handleSubmit}> Submit </button>
      </div>
    </div>
  );
};

const styles = {
  cursor: css`
     {
      margin-left: -50%;
      margin-top: 25%;
      width: 90%;
      height: 50%;
      font-weight: 400;
      font-family: Akkurat Std, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
        Cantarell, Helvetica Neue, sans-serif, Arial;
      -webkit-font-smoothing: antialiased;
      font-size: 2em;
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
      pointer-events: auto;
      right: 0%;
      width: 50%;
      height: 100%;
    }
  `,
  textArea_required_field: css`
     {
      margin-left: -50%;
      font-size: 11px;
      color: red;
    }
  `,
  textArea_submit_button: css`
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

export default TextAreaInput;
