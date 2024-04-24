import React from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput';
import AdjustableDiv from '../AdjustableDiv';

const Text = styled.h5`
  color: black;
  margin: 0;
`;

type InputAndLabelProps = {
  Label: string;
  width: string;
  height: string;
};

const InputAndLabel: React.FC<InputAndLabelProps> = ({
  Label,
  width,
  height,
}) => {
  return (
    <AdjustableDiv width={width} height={height}>
      <Text>{Label}</Text>
      <TextInput width={'100%'} height={'60%'} />
    </AdjustableDiv>
  );
};

export default InputAndLabel;
