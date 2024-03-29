import React from 'react';
import styled from 'styled-components';
import BackButton from './buildingBlocks/BackButton';
import AdditionalQuestionBackButton from './buildingBlocks/AdditionalQuestionBackButton';
import { animated } from 'react-spring';
import { usePageAnimation } from '../styles/animations/pagesTranstions';

type QuestionAnswer = {
  question: string;
  answer1: string;
  answer2: string;
  answer3?: string;
  answer4?: string;
  answer5?: string;
  answer6?: string;
  stateHandlerFunc: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  manyCharacters?: boolean;
  additionalQuestionBtn?: boolean;
  questionTextLong?: boolean;
};

const QuestionAnswer = ({
  question,
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  answer6,
  stateHandlerFunc,
  manyCharacters,
  additionalQuestionBtn,
  questionTextLong,
}: QuestionAnswer) => {
  const { customAnimation }: any = usePageAnimation();

  return (
    <>
      {customAnimation((style: any, isAnimated: boolean) =>
        isAnimated ? (
          <animated.div style={style}>
            <Qa
              manyCharacters={manyCharacters}
              questionTextLong={questionTextLong}
            >
              <h3 className={'mb-10 question_answer_headline'}>{question}</h3>
              <ul>
                <li
                  // manyCharacter
                  onClick={(e) => stateHandlerFunc(e)}
                >
                  {answer1}
                </li>
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
              {additionalQuestionBtn ? (
                <AdditionalQuestionBackButton />
              ) : (
                <BackButton />
              )}
            </Qa>
          </animated.div>
        ) : null
      )}
    </>
  );
};

const Qa = styled.article<any>`
  align-items: center;
  & {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: var(--secondary_color);
  }
  h3 {
    padding: ${(props: any) => (props.questionTextLong ? '1rem' : '0')};
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
    padding: ${(props: any) =>
      props.manyCharacters ? '1rem' : '0.6rem 1.8rem'};
    margin-bottom: 1.8rem;
    cursor: pointer;
    color: var(--primary_color);
  }
`;

export default QuestionAnswer;
