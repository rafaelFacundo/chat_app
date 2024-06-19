import React, { useEffect, useState } from "react";
import ScreenContainer from "../../components/ScreenContainer";
import InputContainer from "../../components/InputContainer";
import InputAndLabel from "../../components/InputAndLabel";
import RequestButton from "../../components/RequestButton";
import MessageModal from "../../components/messageModal";
import userDataBaseAPI from "../../createUserApi/index";

const SignUpScreen: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [showMessageModal, setShowMessageModal] = useState<boolean>(false);
  const [userPasswordConfirmation, setUserPasswordConfirmation] =
    useState<string>("");
  const [isPasswordsDiferents, setIsPasswordsDiferents] =
    useState<boolean>(false);
  const [makeRequest, setMakeRequest] = useState<boolean>(false);
  const [textMessageOfTheModal, setTextMessageOfTheModal] =
    useState<string>("");
  const [isMessageOfTheModalAnError, setIsMessageOfTheModalAnError] =
    useState<boolean>(false);

  const makeRequestToCreateUser = async () => {
    const response = await userDataBaseAPI.post(
      `${window.env.userDataBaseApiCreateUserUrl}/user/signup`,
      { NEW_USER_NAME: userName, NEW_USER_PASSWORD: userPassword }
    );

    if (response.status !== 200) {
      setIsMessageOfTheModalAnError(true);
    }

    setTextMessageOfTheModal(response.data.message);
    setShowMessageModal(true);

    console.log(response.data);
  };

  useEffect(() => {
    try {
      if (makeRequest) {
        makeRequestToCreateUser();
      }
    } catch (error) {
      console.error(error);
    }
  }, [makeRequest]);

  useEffect(() => {
    if (userPassword !== userPasswordConfirmation) {
      console.log(userPasswordConfirmation, userPassword);
      setIsPasswordsDiferents(true);
      setMakeRequest(false);
    } else {
      setIsPasswordsDiferents(false);
      console.log("PASSWORD ARE EQUALS");
      console.log(userPasswordConfirmation, userPassword);
    }
  }, [userPassword, userPasswordConfirmation]);

  // console.log(window.env.userDataBaseApiBaseUrl);

  return (
    <ScreenContainer backgroundColor={"#191970"}>
      <MessageModal
        message={textMessageOfTheModal}
        show={showMessageModal}
        isErrorMessage={isMessageOfTheModalAnError}
        setShowState={setShowMessageModal}
      />
      <InputContainer>
        <InputAndLabel
          Label={"Type your username:"}
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
          isPassword={true}
        />
        <InputAndLabel
          Label={"Re type your password: "}
          width={"70%"}
          height={"60px"}
          state={userPasswordConfirmation}
          setState={setUserPasswordConfirmation}
          inputBorder={isPasswordsDiferents ? "1px solid red" : undefined}
          isPassword={true}
        />
        {!isPasswordsDiferents &&
          userPassword !== "" &&
          userPasswordConfirmation !== "" && (
            <RequestButton
              width={"70%"}
              height={"40px"}
              Text={"Create Account"}
              setStateMakeRequest={setMakeRequest}
            />
          )}
      </InputContainer>
    </ScreenContainer>
  );
};

export default SignUpScreen;
