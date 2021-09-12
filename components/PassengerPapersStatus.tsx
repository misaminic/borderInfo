import React from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../context';

const PassengerPapersStatus = () => {
  const { countryEntered, getPassengerPapersStatus }: any = useGlobalContext();

  return (
    <>
      <QuestionAnswer
        question={'STATUS IN THE COUNTRY YOU ENTERED:'}
        answer1={`CITIZEN OF ${countryEntered.toUpperCase()}`}
        answer2={'TOURIST'}
        answer3={'PERMANENT RESIDENCY'}
        answer4={'TEMPORARY RESIDENCY'}
        stateHandlerFunc={getPassengerPapersStatus}
        manyCharacters={true}
      />
    </>
  );
};

export default PassengerPapersStatus;
