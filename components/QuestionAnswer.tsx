import React from 'react';
import styled from 'styled-components';

const QuestionAnswer = ({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6,
  stateHandlerFunc,
}) => {
  return (
    <Qa>
      <h3>{question}</h3>
      <ul>
        <li onClick={(e) => stateHandlerFunc(e)}>{answer1}</li>
        <li onClick={(e) => stateHandlerFunc(e)}>{answer2}</li>
        {answer3 ? (
          <li onClick={(e) => stateHandlerFunc(e)}>{answer3}</li>
        ) : null}
        {answer4 ? (
          <li onClick={(e) => stateHandlerFunc(e)}>{answer4}</li>
        ) : null}
        {answer5 ? (
          <li onClick={(e) => stateHandlerFunc(e)}>{answer5}</li>
        ) : null}
        {answer6 ? (
          <li onClick={(e) => stateHandlerFunc(e)}>{answer6}</li>
        ) : null}
      </ul>
    </Qa>
  );
};

const Qa = styled.article`
  & {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: var(--secondary_color);
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    justify-content: center;
    border-radius: 0.3rem;
    font-size: 1.3rem;
    font-weight: bold;
    background: #fff;
    padding: 1rem;
    margin-bottom: 1.8rem;
    cursor: pointer;
    color: var(--primary_color);
  }
  button {
    position: absolute;
    bottom: 3rem;
    left: 3rem;
    padding: 1.5rem;
  }
`;

export default QuestionAnswer;
