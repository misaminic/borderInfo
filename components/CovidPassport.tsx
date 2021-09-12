import React from 'react';
import styled from 'styled-components';
import QuestionAnswer from './QuestionAnswer';
import BackButton from './buildingBlocks/BackButton';
import { useGlobalContext } from '../context';

const CovidPassport = () => {
  const { getCovidPassportStatus }: any = useGlobalContext();

  return (
    <>
      <QuestionAnswer
        question={'Do you have a covid passport/certificate'}
        answer1={'YES'}
        answer2={'NO'}
        stateHandlerFunc={getCovidPassportStatus}
      />
    </>
  );
};

export default CovidPassport;
