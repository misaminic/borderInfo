import React from 'react';
import { useGlobalContext } from '../pages/context';
import styled from 'styled-components';

const AdditionalQuestionBackButton = () => {
  const { showRightQuestion }: any = useGlobalContext();

  return (
    <Button type="button" onClick={() => showRightQuestion()}>
      BACK
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

export default AdditionalQuestionBackButton;
