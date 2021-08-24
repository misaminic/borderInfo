import React from 'react';
import { useGlobalContext } from '../pages/context';

const BackButton = () => {
  const { getPreviousQuestion, currentQuestionDisplayed } = useGlobalContext();

  return (
    <button
      type="button"
      onClick={() => getPreviousQuestion(currentQuestionDisplayed)}
    >
      BACK
    </button>
  );
};

export default BackButton;
