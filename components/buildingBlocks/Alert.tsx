import React, { useEffect, useCallback } from 'react';
import { useGlobalContext } from '../../contexts/context';
import { useFilterContext } from '../../contexts/filterContext';

type Message = {
  msg: string;
};

const Alert = ({ msg }: Message) => {
  const { showAlert: removeAlert }: any = useFilterContext();
  const { showAlertFromFeedback: removeAlertFromFeedback }: any =
    useGlobalContext();

  useEffect(() => {
    if (msg !== '') {
      const timeout = setTimeout(() => {
        removeAlert();
        removeAlertFromFeedback();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [removeAlert, removeAlertFromFeedback, msg]);

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
