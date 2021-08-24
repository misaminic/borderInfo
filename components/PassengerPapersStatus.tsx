import React from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../pages/context';
import BackButton from './BackButton';

const PassengerPapersStatus = () => {
  const { countryEntered, getPassengerPapersStatus } = useGlobalContext();

  return (
    <>
      <QuestionAnswer
        question={'YOUR STATUS IN THE COUNTRY YOU ENTERED:'}
        answer1={`CITIZEN OF ${countryEntered.toUpperCase()}`}
        answer2={'TOURIST'}
        answer3={'PERMANENT RESIDENCY'}
        answer4={'TEMPORARY RESIDENCY'}
        stateHandlerFunc={getPassengerPapersStatus}
      />
      <BackButton />
    </>
  );
};

export default PassengerPapersStatus;
