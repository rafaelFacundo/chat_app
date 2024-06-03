import React from "react";
import styled from "styled-components";
import ScreenContainer from "../../components/ScreenContainer";
import InputContainer from "../../components/InputContainer";
import InputAndLabel from "../../components/InputAndLabel";
import RequestButton from "../../components/RequestButton";

const LinkToSignUpScreen = styled.p`
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

const LoginScreen: React.FC = () => {
  return (
    <ScreenContainer backgroundColor={"#191970"}>
      <InputContainer>
        <InputAndLabel
          Label={"Type Your Nick:"}
          width={"70%"}
          height={"60px"}
        />
        <InputAndLabel
          Label={"Type Your password:"}
          width={"70%"}
          height={"60px"}
        />
        <RequestButton width={"70%"} height={"40px"} Text={"Make Login"} />
        <LinkToSignUpScreen
          onClick={() => {
            console.log("ASASASASSA");
          }}
        >
          Create account
        </LinkToSignUpScreen>
      </InputContainer>
    </ScreenContainer>
  );
};

export default LoginScreen;
