import React from 'react';
import styled from 'styled-components';
import AdjustableDiv from '../AdjustableDiv';

const ButtonElement = styled.button`
  width: 100%;
  height: 100%;
  color: black;
  border-radius: 5px;
  border: none;
  transition: 0.5s all;
  &:hover {
    cursor: pointer;
    background-color: #b9b9b9;
  }
`;

type ButtonProps = {
  ButtonText: string;
  width: string;
  height: string;
};

const Button: React.FC<ButtonProps> = ({ ButtonText, width, height }) => {
  return (
    <AdjustableDiv height={height} width={width}>
      <ButtonElement>{ButtonText}</ButtonElement>
    </AdjustableDiv>
  );
};

export default Button;
