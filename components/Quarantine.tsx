import React, { useState } from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../contexts/context';
import NextButton from './buildingBlocks/NextButton';
import AdditionalQuestionBackButton from './buildingBlocks/AdditionalQuestionBackButton';
import QuarantineDays from './QuarantineDays';
import { usePageAnimation } from '../styles/animations/pagesTranstions';

const Quarantine = () => {
  const { getQuarantineStatus, showAdditionalQuestion }: any =
    useGlobalContext();

  const { customAnimation }: any = usePageAnimation();

  return (
    <>
      {!showAdditionalQuestion ? (
        <QuestionAnswer
          question={'DO YOU HAVE TO BE IN QUARANTINE?'}
          answer1={'YES'}
          answer2={'NO'}
          stateHandlerFunc={getQuarantineStatus}
          questionTextLong={true}
        />
      ) : null}
      {showAdditionalQuestion ? <QuarantineDays /> : null}
    </>
  );
};

export default Quarantine;
