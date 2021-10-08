import React, { useState } from 'react';
import { useGlobalContext } from '../contexts/context';
import BackButton from './buildingBlocks/BackButton';
import NextButton from './buildingBlocks/NextButton';
import { animated } from 'react-spring';
import { usePageAnimation } from '../styles/animations/pagesTranstions';

const NameOfTheBorder = () => {
  const { getBorderName }: any = useGlobalContext();
  const [borderName, setBorderName] = useState('');

  const { customAnimation }: any = usePageAnimation();

  return (
    <>
      {customAnimation((style: any, isAnimated: boolean) =>
        isAnimated ? (
          <animated.article
            className={'section_with_longtext_labels'}
            style={style}
          >
            <label htmlFor={'borderName'} className="text-2xl text-center p-4">
              name of the border you crossed
            </label>
            <input
              className="rounded"
              type="text"
              value={borderName}
              onChange={(e) => setBorderName(e.target.value)}
            />
            <div>
              <NextButton borderName={borderName} />
              <BackButton />
            </div>
          </animated.article>
        ) : null
      )}
    </>
  );
};

export default NameOfTheBorder;
