import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../pages/context';

const Submit = () => {
  const { getComment, submitUserFeedbackToDB } = useGlobalContext();

  const [textareaValue, setTextareaValue] = useState('');

  useEffect(() => {
    if (textareaValue) {
      getComment(textareaValue);
    }
  }, [textareaValue]);

  return (
    <>
      <h3>The form is completed</h3>
      <p>
        If you want to add any comment, please write it in the textbox below.
      </p>
      <textarea
        name="comment"
        id="textarea_submit"
        cols="30"
        rows="10"
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      ></textarea>
      <button type="submit" onClick={(e) => submitUserFeedbackToDB(e)}>
        SUBMIT
      </button>
    </>
  );
};

export default Submit;
