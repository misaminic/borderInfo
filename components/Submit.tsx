import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';
import SubmitButton from './buildingBlocks/SubmitButton';

const Submit = () => {
  const { getComment, submitUserFeedbackToDB }: any = useGlobalContext();

  const [textareaValue, setTextareaValue] = useState('');

  useEffect(() => {
    if (textareaValue) {
      getComment(textareaValue);
    }
  }, [textareaValue]);

  return (
    <>
      <h1 className="text-2xl font-bold">THE FORM IS COMPLETED</h1>
      <p className="p-8 text-center">
        If you have any additional info, please write it below.
      </p>
      <textarea
        className="text-black rounded p-2"
        name="comment"
        id="textarea_submit"
        cols={32}
        rows={6}
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      ></textarea>
      <SubmitButton handler={submitUserFeedbackToDB} />
      {/* <button type="submit" onClick={(e) => submitUserFeedbackToDB(e)}>
        SUBMIT
      </button> */}
    </>
  );
};

export default Submit;
