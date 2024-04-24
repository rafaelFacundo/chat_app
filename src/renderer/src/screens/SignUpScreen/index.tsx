import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import InputContainer from '../../components/InputContainer';
import InputAndLabel from '../../components/InputAndLabel';
import RequestButton from '../../components/RequestButton';

const SignUpScreen: React.FC = () => {
  return (
    <ScreenContainer backgroundColor={'#191970'}>
      <InputContainer>
        <InputAndLabel
          Label={'Type Your Name:'}
          width={'70%'}
          height={'60px'}
        />
        <InputAndLabel
          Label={'Type your password: '}
          width={'70%'}
          height={'60px'}
        />
        <InputAndLabel
          Label={'Re type your password: '}
          width={'70%'}
          height={'60px'}
        />
        <RequestButton width={'70%'} height={'40px'} Text={'Create Account'} />
      </InputContainer>
    </ScreenContainer>
  );
};

export default SignUpScreen;
