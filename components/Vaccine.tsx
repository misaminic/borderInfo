import React from 'react';
import styled from 'styled-components';
import QuestionAnswer from './QuestionAnswer';
import BackButton from './buildingBlocks/BackButton';
import { useGlobalContext } from '../pages/context';
import AdditionalQuestionBackButton from './AdditionalQuestionBackButton';

const Vaccine = () => {
  const {
    getVaccinationStatus,
    getVaccineName,
    vaccinationStatus,
    showAdditionalQuestion,
  } = useGlobalContext();

  return (
    <Questions>
      {!showAdditionalQuestion ? (
        <>
          <QuestionAnswer
            question={'ARE YOU VACCINATED?'}
            answer1={'YES'}
            answer2={'GOT A FIRST DOSE'}
            answer3={'NO'}
            stateHandlerFunc={getVaccinationStatus}
          />
        </>
      ) : null}
      {showAdditionalQuestion ? (
        <>
          <QuestionAnswer
            question={'WHICH VACCINE HAVE YOU GOT?'}
            answer1={'PFISER'}
            answer2={'MODERNA'}
            answer3={'SPUTNIK'}
            answer4={'ASTRAZENECA'}
            answer5={'SINOFARM'}
            answer6={'JOHNSON & JOHNSON'}
            stateHandlerFunc={getVaccineName}
            additionalQuestionBtn={true}
          />
        </>
      ) : null}
    </Questions>
  );
};

const Questions = styled.article`
  height: calc(100vh + 5rem);
  margin-top: 4rem;
  margin-bottom: 4rem;
  ul {
    list-style-type: none;
  }
`;

export default Vaccine;
