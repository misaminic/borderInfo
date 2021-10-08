import React from 'react';
import styled from 'styled-components';
import QuestionAnswer from './QuestionAnswer';
import BackButton from './buildingBlocks/BackButton';
import { useGlobalContext } from '../contexts/context';
import AdditionalQuestionBackButton from './buildingBlocks/AdditionalQuestionBackButton';

const Vaccine = () => {
  const {
    getVaccinationStatus,
    getVaccineName,
    vaccinationStatus,
    showAdditionalQuestion,
  }: any = useGlobalContext();

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
        <ChooseVaccine>
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
        </ChooseVaccine>
      ) : null}
    </Questions>
  );
};

const Questions = styled.article`
  /* height: calc(100vh + 5rem); */

  ul {
    list-style-type: none;
  }
`;

const ChooseVaccine = styled.article`
  margin-top: 6rem;
`;

export default Vaccine;
