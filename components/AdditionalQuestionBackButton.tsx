import React from 'react';
import { useGlobalContext } from '../pages/context';

const AdditionalQuestionBackButton = () => {
  const { showRightQuestion } = useGlobalContext();

  return (
    <button type="button" onClick={() => showRightQuestion()}>
      BACK
    </button>
  );
};

export default AdditionalQuestionBackButton;
