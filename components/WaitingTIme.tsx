import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../pages/context';
import NextButton from './buildingBlocks/NextButton';
import BackButton from './buildingBlocks/BackButton';

const WaitingTIme = () => {
  const { getWaitingTime } = useGlobalContext();
  let minutes = useRef(0);

  const [waitingTime, setWaitingTime] = useState(null);
  // useEffect(() => {
  //   if (minutes.current.value) {
  //     console.log(minutes.current.value);
  //   }
  // }, [minutes.current.value]);

  return (
    <>
      <h3 className="text-2xl p-8 text-center waiting_time">
        How long it took you to cross the border?
      </h3>
      <input
        className="rounded"
        type="number"
        value={waitingTime}
        onChange={(e) => setWaitingTime(e.target.value)}
      />
      <NextButton waitingTime={waitingTime}>NEXT</NextButton>
      <BackButton />
    </>
  );
};

export default WaitingTIme;
