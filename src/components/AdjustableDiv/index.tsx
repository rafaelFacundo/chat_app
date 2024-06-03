import React = require('react');
import styled from 'styled-components';

interface DivProps {
  width: string;
  height: string;
}

const Div = styled.div<DivProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

type AdjustableDivProps = {
  children: React.ReactNode;
  width: string;
  height: string;
};

const AdjustableDiv: React.FC<AdjustableDivProps> = ({
  children,
  height,
  width,
}) => {
  return (
    <Div height={height} width={width}>
      {children}
    </Div>
  );
};

export default AdjustableDiv;
