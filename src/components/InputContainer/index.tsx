import React from 'react';
import styled from 'styled-components';
import Hidden from '../../../../../assets/hiddenPerson.png';

const Div = styled.div`
  width: 40%;
  height: 60%;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
`;

type InputContainerProps = {
  children: React.ReactNode;
};

const Image = styled.img`
  width: 250px;
  height: 200px;
  position: absolute;
  top: -127px;
`;

const InputContainer: React.FC<InputContainerProps> = ({ children }) => {
  return (
    <Div>
      <Image src={Hidden} />
      {children}
    </Div>
  );
};

export default InputContainer;
