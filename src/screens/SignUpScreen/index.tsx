import React, { useEffect, useState } from "react";
//import usersDataBaseApi from "../../../api";
import ScreenContainer from "../../components/ScreenContainer";
import InputContainer from "../../components/InputContainer";
import InputAndLabel from "../../components/InputAndLabel";
import RequestButton from "../../components/RequestButton";

import MessageModal from "../../components/messageModal";

const SignUpScreen: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [showMessageModal, setShowMessageModal] = useState<boolean>(false);
  const [userPasswordConfirmation, setUserPasswordConfirmation] =
    useState<string>("");
  const [isPasswordsDiferents, setIsPasswordsDiferents] =
    useState<boolean>(false);
  const [makeRequest, setMakeRequest] = useState<boolean>(false);

  /* const makeRequestToCreateUser = async () => {
    const response = await usersDataBaseApi.post(
      window.env.userDataBaseApiCreateUserUrl,
      { NEW_USER_NAME: userName, NEW_USER_PASSWORD: userPassword },
    );
    console.log(response.data);
  }; */

  useEffect(() => {
    if (makeRequest) {
      //makeRequestToCreateUser();
    }
  }, [makeRequest]);

  useEffect(() => {
    if (
      userPasswordConfirmation !== "" &&
      userPassword !== userPasswordConfirmation
    ) {
      setIsPasswordsDiferents(true);
    }
  }, [userPassword, userPasswordConfirmation]);

  // console.log(window.env.userDataBaseApiBaseUrl);

  return (
    <ScreenContainer backgroundColor={"#191970"}>
      <MessageModal
        message={"Something went wrong"}
        show={showMessageModal}
        isErrorMessage={true}
        setShowState={setShowMessageModal}
      />
      <InputContainer>
        <InputAndLabel
          Label={"Type Your Name:"}
          width={"70%"}
          height={"60px"}
          state={userName}
          setState={setUserName}
        />
        <InputAndLabel
          Label={"Type your password: "}
          width={"70%"}
          height={"60px"}
          state={userPassword}
          setState={setUserPassword}
          inputBorder={isPasswordsDiferents ? "1px solid red" : undefined}
        />
        <InputAndLabel
          Label={"Re type your password: "}
          width={"70%"}
          height={"60px"}
          state={userPasswordConfirmation}
          setState={setUserPasswordConfirmation}
          inputBorder={isPasswordsDiferents ? "1px solid red" : undefined}
        />
        <RequestButton width={"70%"} height={"40px"} Text={"Create Account"} />
      </InputContainer>
    </ScreenContainer>
  );
};

export default SignUpScreen;
