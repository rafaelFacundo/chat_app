import React, { SetStateAction } from "react";
import styled from "styled-components";
import AdjustableDiv from "../AdjustableDiv";

type InputProps = {
  border?: string;
};

const Input = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  outline: none;
  margin: 0;
  padding: 0;
  border: ${(props) => (props.border ? props.border : "none")};
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
  setState: React.Dispatch<SetStateAction<string>>;
  state: string;
  border?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  width,
  height,
  setState,
  state,
  border,
}) => {
  return (
    <AdjustableDiv height={height} width={width}>
      <Input
        onChange={(e) => setState(e.target.value)}
        value={state}
        border={border}
      />
    </AdjustableDiv>
  );
};

export default TextInput;
