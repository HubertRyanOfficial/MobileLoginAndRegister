import React from 'react';

// modules

// components

import { StatusBar, Image } from 'react-native';

import {
  Container,
  MiddleContainer,
  MiddleTitle,
  MiddleSubTitle,
  InputsContainer,
  EmailInput,
  PasswordInput,
  ForgotPasswordContainer,
  ForgotPasswordText,
  BottomContainer,
  BottomButton,
  Button,
} from './styles';

import Header from '../../components/Header';

// images

import NextIcon from '../../../assets/i_next.png';

function Login() {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header type={'signin'} />
      <MiddleContainer>
        <MiddleTitle>Welcome back,</MiddleTitle>
        <MiddleSubTitle>Gave</MiddleSubTitle>

        <InputsContainer>
          <EmailInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email address"
            placeholderTextColor="#ddd"
          />
          <PasswordInput
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#ddd"
          />
        </InputsContainer>

        <ForgotPasswordContainer onPress={() => {}}>
          <ForgotPasswordText>Forgot password?</ForgotPasswordText>
        </ForgotPasswordContainer>
      </MiddleContainer>

      <BottomContainer>
        <Button onPress={() => {}}>
          <BottomButton>
            <Image source={NextIcon} />
          </BottomButton>
        </Button>
      </BottomContainer>
    </Container>
  );
}

export default Login;
// Desenvolvido por Hubert Ryan
