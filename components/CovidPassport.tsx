import React from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../contexts/context';

const CovidPassport = () => {
  const { getCovidPassportStatus }: any = useGlobalContext();

  return (
    <QuestionAnswer
      question={'Do you have a covid passport/certificate'}
      answer1={'YES'}
      answer2={'NO'}
      stateHandlerFunc={getCovidPassportStatus}
    />
  );
};

export default CovidPassport;
