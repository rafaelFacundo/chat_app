import React, { SetStateAction, useState } from "react";
import styled from "styled-components";
import AdjustableDiv from "../AdjustableDiv";
import OpenEyeVector from "../../../assets/openEyeVector.png";
import ClosedEyeVector from "../../../assets/closedEyeVector.png";

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
  box-sizing: border-box;
  padding: 5px;
  border-bottom: 1px solid #0d0d4a;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 35px;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

type TextInputProps = {
  width: string;
  height: string;
  setState: React.Dispatch<SetStateAction<string>>;
  state: string;
  border?: string;
  isPasswordInput?: boolean;
};

const TextInput: React.FC<TextInputProps> = ({
  width,
  height,
  setState,
  state,
  border,
  isPasswordInput,
}) => {
  const [showTextInputed, setshowTextInputed] = useState<boolean>(
    isPasswordInput ? false : true
  );

  return (
    <AdjustableDiv height={height} width={width}>
      <Div>
        <Input
          onChange={(e) => setState(e.target.value)}
          value={state}
          border={border}
          type={!showTextInputed ? "password" : "text"}
        />
        {isPasswordInput && (
          <Button onClick={() => setshowTextInputed(!showTextInputed)}>
            <Image src={showTextInputed ? ClosedEyeVector : OpenEyeVector} />
          </Button>
        )}
      </Div>
    </AdjustableDiv>
  );
};

export default TextInput;
