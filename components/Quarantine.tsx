import React, { useState } from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../pages/context';
import NextButton from './buildingBlocks/NextButton';
import AdditionalQuestionBackButton from './AdditionalQuestionBackButton';

const Quarantine = () => {
  const { getQuarantineStatus, getQuarantineDays, showAdditionalQuestion } =
    useGlobalContext();

  const [days, setDays] = useState(null);

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
      ) : (
        <>
          <h3 className="text-2xl p-8">HOW MANY DAYS?</h3>
          <input
            className="rounded"
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
          <NextButton quarantineDays={days}>NEXT</NextButton>
          {showAdditionalQuestion ? <AdditionalQuestionBackButton /> : null}
        </>
      )}
    </>
  );
};

export default Quarantine;
