import React, { useEffect, useCallback } from 'react';
import { useFilterContext } from '../../pages/filterContext';

type Message = {
  msg: string;
};

const Alert = ({ msg }: Message) => {
  const { showAlert: removeAlert }: any = useFilterContext();

  useEffect(() => {
    if (msg !== '') {
      const timeout = setTimeout(() => {
        removeAlert();
        console.log('aaa');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [removeAlert, msg]);

  return (
    <>
      {msg ? (
        <div className="bg-white text-black font-semibold mt-8 p-3 rounded">
          <p>{msg}</p>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
