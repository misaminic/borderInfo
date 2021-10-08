import React, { useState } from 'react';
import { animated, useTransition, config } from 'react-spring';

const FaqQuestion = ({ question, answer }: any) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  const transitionAnswers = useTransition(showAnswer, {
    // config: showAnswer && { duration: 250 },
    from: { opacity: 0 },
    enter: {
      opacity: 1,
      // transform: `translate3d(0px, 0px, 0px)`,
    },
    leave: { opacity: 0 },
  });

  return (
    <>
      <h3
        className={`faq_question relative text-center mt-6 pl-8 uppercase text-sm tracking-wider bg-white text-black font-bold p-4 rounded ${
          showAnswer ? 'rotate_arrow' : ''
        }`}
        onClick={() => handleClick()}
      >
        {question}
      </h3>
      {showAnswer
        ? transitionAnswers((style, showAnswer) =>
            showAnswer ? (
              <animated.li className="p-4 tracking-wide h-1/4" style={style}>
                {answer}
              </animated.li>
            ) : null
          )
        : null}
    </>
  );
};

export default FaqQuestion;
