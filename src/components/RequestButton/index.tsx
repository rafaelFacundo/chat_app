import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import AdjustableDiv from '../AdjustableDiv';

type RequestButtonProps = {
  Text: string;
  width: string;
  height: string;
};

const RequestButton: React.FC<RequestButtonProps> = ({
  Text,
  width,
  height,
}) => {
  return (
    <AdjustableDiv width={width} height={height}>
      <Button ButtonText={Text} width={'100%'} height={'100%'} />
    </AdjustableDiv>
  );
};

export default RequestButton;
