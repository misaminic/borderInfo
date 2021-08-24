import React, { useEffect } from 'react';
import { useGlobalContext } from '../pages/context';

const SendData = () => {
  const { sendData } = useGlobalContext();

  useEffect(() => {
    sendData();
  }, []);

  return (
    <div>
      <h1>Thank You!</h1>
    </div>
  );
};

export default SendData;
