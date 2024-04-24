import React, { Children } from 'react';
import styled from 'styled-components';

type ContainerProps = {
  backgroundColor: string;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

type ScreenContainerProps = {
  children: React.ReactNode;
  backgroundColor: string;
};

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  backgroundColor,
}) => {
  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

export default ScreenContainer;
