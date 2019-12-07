/** @jsx jsx */

import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import TextareaAutosize from 'react-autosize-textarea';

type Props = {
  initialValue: string;
  onSubmit: (value: string) => void;
};

const MINIMUM_CHARACTER_COUNT = 20;
const MORE_CHARACTERS_REQUIRED_MESSAGE = 'Enter a text with at least 20 characters.';
const isTooShort = (value: string) => value.length < MINIMUM_CHARACTER_COUNT;

const TextAreaInput = ({ initialValue, onSubmit }: Props) => {
  const [value, setValue] = useState('');
  const [validationWarning, setValidationWarning] = useState('');

  // Consider validation of event.target.value
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    setValue(event.currentTarget.value);
  };
  const handleSubmit = (): void => {
    if (isTooShort(value)) {
      setValidationWarning(MORE_CHARACTERS_REQUIRED_MESSAGE);
    } else {
      onSubmit(value);
    }
  };

  const handleClick = () => {
    if (validationWarning) {
      setValidationWarning('');
    }
  };

  return (
    <div css={styles.textArea_content_item}>
      <TextareaAutosize
        css={styles.textArea_form}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
      />
      <p css={styles.textArea_required_field}>{validationWarning}</p>
      <input css={styles.textArea_submit_button} value="Submit" onClick={handleSubmit} />
    </div>
  );
};

const styles = {
  textArea_content_item: css`
     {
      display: inline-block;
      position: fixed;
      margin-top: 10%;
      width: 500px;
    }
  `,
  textArea_form: css`
     {
      width: 200px;
      top: 30%;
      height: 80px;
      left: 60%;
      margin-left: 60%;
    }
  `,
  textArea_required_field: css`
     {
      font-size: 11px;
      margin-left: 50%;
      color: red;
    }
  `,
  textArea_submit_button: css`
     {
      border: 2px solid lightgray;
      margin-left: 50%;
      margin-top: 5%;
      width: 60px;
      height: 10px;
      padding: 5px;
      text-align: center;
      font-size: 10px;
      cursor: pointer;
    }
  `,
};

export default TextAreaInput;
