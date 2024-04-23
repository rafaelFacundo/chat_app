import React, { Children } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

type ScreenContainerProps = {
  children: React.ReactNode;
};

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ScreenContainer;
