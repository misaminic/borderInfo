import React, { useState } from 'react';
import QuestionAnswer from './QuestionAnswer';
import { useGlobalContext } from '../pages/context';

const Quarantine = () => {
  const { getQuarantineStatus, getQuarantineDays, showAdditionalQuestion } =
    useGlobalContext();

  const [days, setDays] = useState(0);

  return (
    <>
      {!showAdditionalQuestion ? (
        <QuestionAnswer
          question={'DO YOU HAVE TO BE IN QUARANTINE?'}
          answer1={'YES'}
          answer2={'NO'}
          stateHandlerFunc={getQuarantineStatus}
        />
      ) : (
        <>
          <h3>HOW MANY DAYS?</h3>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
          <button type="submit" onClick={() => getQuarantineDays(days)}>
            NEXT
          </button>
        </>
      )}
    </>
  );
};

export default Quarantine;
