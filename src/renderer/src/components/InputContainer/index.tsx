import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 30%;
  height: 60%;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

type InputContainerProps = {
  children: React.ReactNode;
};

const InputContainer: React.FC<InputContainerProps> = ({ children }) => {
  return <Div>{children}</Div>;
};

export default InputContainer;
