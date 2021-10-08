import { useState } from 'react';
import { animated } from 'react-spring';
import { usePageAnimation } from '../styles/animations/pagesTranstions';
import NextButton from './buildingBlocks/NextButton';
import AdditionalQuestionBackButton from './buildingBlocks/AdditionalQuestionBackButton';
import { useGlobalContext } from '../contexts/context';

const QuarantineDays = () => {
  const [days, setDays] = useState('');

  const { customAnimation } = usePageAnimation();

  const {
    getQuarantineStatus,
    getQuarantineDays,
    showAdditionalQuestion,
  }: any = useGlobalContext();

  return (
    <>
      {customAnimation(
        (style, isAnimated) =>
          isAnimated && (
            <animated.article
              className={'flex flex-col place-items-center'}
              style={style}
            >
              <h3 className="text-2xl p-8 underline">HOW MANY DAYS?</h3>
              <input
                className="rounded"
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
              <NextButton quarantineDays={days}>NEXT</NextButton>
              {showAdditionalQuestion ? <AdditionalQuestionBackButton /> : null}
            </animated.article>
          )
      )}
    </>
  );
};

export default QuarantineDays;
