import React from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../contexts/context';
import BackButton from './buildingBlocks/BackButton';

const HadCovid = () => {
  const { getHadCovid }: any = useGlobalContext();

  return (
    <>
      <QuestionAnswer
        question={'HAVE YOU HAD COVID?'}
        answer1={'YES'}
        answer2={'NO'}
        stateHandlerFunc={getHadCovid}
      />
    </>
  );
};

export default HadCovid;
