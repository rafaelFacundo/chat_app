import React from 'react';
import styled from 'styled-components';
import TextInput from '../TextInput';

const Div = styled.div``;
const Text = styled.h5``;

type InputAndLabelProps = {
  Label: string;
};

const InputAndLabel: React.FC<InputAndLabelProps> = ({ Label }) => {
  return (
    <Div>
      <Text>{Label}</Text>
      <TextInput />
    </Div>
  );
};

export default InputAndLabel;
