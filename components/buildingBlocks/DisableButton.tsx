import React from 'react';

const DisableButton = ({ handler }) => {
  return (
    <button type="button" className="button" onClick={handler}>
      SEARCH
      <style jsx>{`
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 9rem;
          height: 3rem;
          margin-top: 2rem;
          background: dodgerblue;
          border-radius: 0.25rem;
          transition: all 0.3s cubic-bezier(0.67, 0.17, 0.4, 0.83);
        }
      `}</style>
    </button>
  );
};

export default DisableButton;
