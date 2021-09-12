import React from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../context';

const Pcr = () => {
  const { getPcrStatus }: any = useGlobalContext();

  return (
    <QuestionAnswer
      question={'HAVE YOU DONE PCR TEST?'}
      answer1={'YES'}
      answer2={'NO'}
      stateHandlerFunc={getPcrStatus}
    ></QuestionAnswer>
  );
};

export default Pcr;
