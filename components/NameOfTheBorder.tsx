import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import BackButton from './buildingBlocks/BackButton';
import NextButton from './buildingBlocks/NextButton';

const NameOfTheBorder = () => {
  const { getBorderName }: any = useGlobalContext();
  const [borderName, setBorderName] = useState('');

  return (
    <article className={'section_with_longtext_labels'}>
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
    </article>
  );
};

export default NameOfTheBorder;
