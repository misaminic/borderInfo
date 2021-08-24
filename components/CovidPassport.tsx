import React from 'react';
import styled from 'styled-components';
import QuestionAnswer from './QuestionAnswer';
import BackButton from './BackButton';
import { useGlobalContext } from '../pages/context';

const CovidPassport = () => {
  const { getCovidPassportStatus } = useGlobalContext();

  return (
    <>
      <QuestionAnswer
        question={'Do you have a covid passport/certificate'}
        answer1={'Yes'}
        answer2={'No'}
        stateHandlerFunc={getCovidPassportStatus}
      />
      <BackButton />
    </>
  );
};

export default CovidPassport;
