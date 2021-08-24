import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../pages/context';

const WaitingTIme = () => {
  const { getWaitingTime } = useGlobalContext();
  const minutes = useRef(0);

  useEffect(() => {
    if (minutes.current.value) {
      console.log(minutes.current.value);
    }
  }, [minutes.current.value]);

  return (
    <>
      <h3>How long it took you to cross the border?</h3>
      <input type="number" ref={minutes} />
      <button
        type="submit"
        onClick={() => getWaitingTime(minutes.current.value)}
      >
        NEXT
      </button>
    </>
  );
};

export default WaitingTIme;
