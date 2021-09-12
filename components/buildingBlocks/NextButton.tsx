import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import styled from 'styled-components';
import _ from 'lodash';

type Props = {
  borderName?: string;
  quarantineDays?: string;
  waitingTime?: string;
  children?: string;
};

// type FuncsFromContext = {
//   getBorderName: (name: string) => void;
//   getQuarantineDays: (days: number) => void;
//   getWaitingTime: (time: number) => void;
// };

const NextButton = ({ borderName, quarantineDays, waitingTime }: Props) => {
  const { getBorderName, getQuarantineDays, getWaitingTime }: any =
    useGlobalContext();

  return (
    <Button
      type="button"
      onClick={() =>
        borderName
          ? getBorderName(borderName)
          : quarantineDays
          ? getQuarantineDays(quarantineDays)
          : waitingTime
          ? getWaitingTime(waitingTime)
          : null
      }
    >
      NEXT
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 3rem;
  margin-top: 2rem;
  letter-spacing: 0.1rem;
  background: #000;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  transition: all 0.3s cubic-bezier(0.67, 0.17, 0.4, 0.83);
`;

export default NextButton;
