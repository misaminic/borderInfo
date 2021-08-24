import React, { useState } from 'react';
import { useGlobalContext } from '../pages/context';

const NameOfTheBorder = () => {
  const { getBorderName } = useGlobalContext();
  const [borderName, setBorderName] = useState('');

  return (
    <>
      <h3>NAME OF THE BORDER YOU CROSSED</h3>
      <input
        type="text"
        value={borderName}
        onChange={(e) => setBorderName(e.target.value)}
      />
      <button type="submit" onClick={() => getBorderName(borderName)}>
        NEXT
      </button>
    </>
  );
};

export default NameOfTheBorder;
