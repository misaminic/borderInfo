import React from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../contexts/context';
import styled from 'styled-components';

const PassengerPapersStatus = () => {
  const { countryEntered, getPassengerPapersStatus }: any = useGlobalContext();

  return (
    <PassengerPapersStatusWrapper>
      <QuestionAnswer
        question={'STATUS IN THE COUNTRY YOU ENTERED:'}
        answer1={`CITIZEN OF ${countryEntered.toUpperCase()}`}
        answer2={'TOURIST'}
        answer3={'PERMANENT RESIDENT'}
        answer4={'TEMPORARY RESIDENT'}
        stateHandlerFunc={getPassengerPapersStatus}
        manyCharacters={true}
      />
    </PassengerPapersStatusWrapper>
  );
};

const PassengerPapersStatusWrapper = styled.article`
  margin-top: 6rem;
`;

export default PassengerPapersStatus;
