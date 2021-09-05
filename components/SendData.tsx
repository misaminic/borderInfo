import React, { useEffect } from 'react';
import { useGlobalContext } from '../pages/context';
import { useRouter } from 'next/router';

const SendData = () => {
  const { sendData } = useGlobalContext();

  let router = useRouter();

  useEffect(() => {
    sendData();
    const timeout = setTimeout(() => {
      router.push('/');
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Thank You!</h1>
    </div>
  );
};

export default SendData;
