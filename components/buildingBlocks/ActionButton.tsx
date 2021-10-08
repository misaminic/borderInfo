import React from 'react';
import styled from 'styled-components';

const ActionButton = ({ handler, text }: any) => {
  return (
    <Button
      type="button"
      className="button active:transform active:scale-90"
      onClick={handler}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 3rem;
  margin-top: 3rem;
  letter-spacing: 0.1rem;
  background: #000;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  transition: all 0.3s cubic-bezier(0.67, 0.17, 0.4, 0.83);

  /* &:hover {
    background: ${(props: any) => (props.toggleHover ? '#fff' : '#000')};
    color: ${(props: any) => (props.toggleHover ? '#000' : '#fff')};
  } */
`;

export default ActionButton;
