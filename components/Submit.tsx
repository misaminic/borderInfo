import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../contexts/context';
import SubmitButton from './buildingBlocks/SubmitButton';
import { animated } from 'react-spring';
import { usePageAnimation } from '../styles/animations/pagesTranstions';

const Submit = () => {
  const {
    getComment,
    submitUserFeedbackToDB,
    isSidebarMenuIconVisible,
    handleResize,
  }: any = useGlobalContext();

  const { customAnimation }: any = usePageAnimation();
  const [textareaValue, setTextareaValue] = useState('');

  useEffect(() => {
    if (textareaValue) {
      getComment(textareaValue);
    }
  }, [textareaValue]);

  window.addEventListener('resize', handleResize);

  return (
    <>
      {customAnimation((style: any, isAnimated: boolean) =>
        isAnimated ? (
          <animated.article
            style={style}
            className="flex flex-col place-items-center"
          >
            {isSidebarMenuIconVisible === true ? (
              <>
                <h1 className="text-2xl font-bold">THE FORM IS COMPLETED</h1>
                <p className="p-8 text-center">
                  If you have any additional info, please write it below.
                </p>
              </>
            ) : null}
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
          </animated.article>
        ) : null
      )}
    </>
  );
};

export default Submit;
