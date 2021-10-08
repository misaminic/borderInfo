import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../contexts/context';
import NextButton from './buildingBlocks/NextButton';
import BackButton from './buildingBlocks/BackButton';
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { usePageAnimation } from '../styles/animations/pagesTranstions';

const WaitingTime = () => {
  let minutes = useRef(0);

  const [waitingTime, setWaitingTime] = useState('');
  const { customAnimation }: any = usePageAnimation();

  return (
    <>
      {customAnimation((style: any, isAnimated: boolean) =>
        isAnimated ? (
          <animated.article
            className="flex flex-col place-items-center"
            style={style}
          >
            <h3 className="text-2xl p-8 text-center waiting_time mt-8">
              How long it took you to cross the border?
            </h3>
            <input
              className="rounded waiting_time_input"
              type="number"
              value={waitingTime}
              placeholder="minutes"
              onChange={(e) => setWaitingTime(e.target.value)}
            />
            <NextButton waitingTime={waitingTime}>NEXT</NextButton>
            <BackButton />
          </animated.article>
        ) : null
      )}
    </>
  );
};

export default WaitingTime;
