import React from 'react';
import styled from 'styled-components';
import AdjustableDiv from '../AdjustableDiv';

const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
  background-color: #f0f0f0;
  transition: 0.5s all;
  &:focus {
    width: 110%;
  }
  box-sizing: border-box;
  padding: 5px;
  border-bottom: 1px solid #0d0d4a;
`;

type TextInputProps = {
  width: string;
  height: string;
};

const TextInput: React.FC<TextInputProps> = ({ width, height }) => {
  return (
    <AdjustableDiv height={height} width={width}>
      <Input />
    </AdjustableDiv>
  );
};

export default TextInput;
