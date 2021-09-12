import React from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../pages/context';

const AntiGen = () => {
  const { getAntiGenStatus }: any = useGlobalContext();

  return (
    <QuestionAnswer
      question={'HAVE YOU DONE ANTIGEN TEST?'}
      answer1={'YES'}
      answer2={'NO'}
      stateHandlerFunc={getAntiGenStatus}
    ></QuestionAnswer>
  );
};

export default AntiGen;
