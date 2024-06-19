import React, { SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import CloseMessageModalIcon from "../../../assets/closeMessageModalIcon.png";

type DivProps = {
  show: boolean;
  isErrorMessage: boolean;
};
type LoadBarProps = {
  percentage: string;
};

const Div = styled.div<DivProps>`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${(props) =>
    props.isErrorMessage ? "#ce2121" : "#1dd31d"};
  border-radius: 25px 25px 0 0;
  width: 300px;
  display: ${(props) => (props.show ? "block" : "none")};
`;
const Message = styled.p``;
const Button = styled.button`
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 25px;
  height: 25px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 90%;
`;
const LoadingBar = styled.div<LoadBarProps>`
  width: ${(props) => props.percentage};
  height: 10px;
  background-color: white;
`;

type MessageModalProps = {
  message: string;
  isErrorMessage: boolean;
  show: boolean;
  setShowState: React.Dispatch<SetStateAction<boolean>>;
};

const MessageModal: React.FC<MessageModalProps> = ({
  message,
  isErrorMessage,
  show,
  setShowState,
}) => {
  const [seconds, setSeconds] = useState<number>(100);

  useEffect(() => {
    if (seconds > 0) {
      const timeId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearInterval(timeId);
    } else {
      setShowState(false);
    }
  }, [seconds]);

  return (
    <Div show={show} isErrorMessage={isErrorMessage}>
      <Wrapper>
        <Message>{message}</Message>
        <Button
          onClick={() => {
            setShowState(false);
            setSeconds(0);
          }}
        >
          <Image src={CloseMessageModalIcon} />
        </Button>
      </Wrapper>
      <LoadingBar percentage={`${seconds}%`}></LoadingBar>
    </Div>
  );
};

export default MessageModal;
