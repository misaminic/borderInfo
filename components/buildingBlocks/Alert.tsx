import React, { useEffect } from 'react';
import { useFilterContext } from '../../pages/filterContext';

const Alert = ({ msg }) => {
  const { showAlert: removeAlert } = useFilterContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 5000);
    return () => clearTimeout(timeout);
  }, [removeAlert]);

  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
