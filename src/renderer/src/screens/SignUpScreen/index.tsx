import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import InputContainer from '../../components/InputContainer';
import InputAndLabel from '../../components/InputAndLabel';

const SignUpScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <InputContainer>
        <InputAndLabel Label={'Type Your Name:'} />
      </InputContainer>
    </ScreenContainer>
  );
};

export default SignUpScreen;
