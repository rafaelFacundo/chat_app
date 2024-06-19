import React, { SetStateAction } from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import AdjustableDiv from "../AdjustableDiv";

const Text = styled.h5`
  color: black;
  margin: 0;
`;

type InputAndLabelProps = {
  Label: string;
  width: string;
  height: string;
  setState: React.Dispatch<SetStateAction<string>>;
  state: string;
  inputBorder?: string;
  isPassword?: boolean;
};

const InputAndLabel: React.FC<InputAndLabelProps> = ({
  Label,
  width,
  height,
  setState,
  state,
  inputBorder,
  isPassword,
}) => {
  return (
    <AdjustableDiv width={width} height={height}>
      <Text>{Label}</Text>
      <TextInput
        setState={setState}
        state={state}
        width={"100%"}
        height={"60%"}
        border={inputBorder}
        isPasswordInput={isPassword}
      />
    </AdjustableDiv>
  );
};

export default InputAndLabel;
