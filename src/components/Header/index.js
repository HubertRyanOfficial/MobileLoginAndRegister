import React, { memo } from 'react';

// modules

import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

// components

import {
  Container,
  UserBox,
  OptionsSignContainer,
  OptionSelected,
  OptionSelectedText,
  OptionSelectedBar,
  OptionNoSelected,
  OptionNoSelectedText,
} from './styles';

import UserIcon from '../../../assets/i_user.png';

function Header({ type }) {
  const navigation = useNavigation();

  function goSignIn() {
    console.log('Sign In');
    navigation.navigate('Login');
  }

  function goSignUp() {
    navigation.navigate('SignUp');
  }

  if (type === 'signup') {
    return (
      <Container>
        <UserBox backgroundColor={'#E18E90'}>
          <Image source={UserIcon} />
        </UserBox>
        <OptionsSignContainer>
          <OptionSelected>
            <OptionSelectedText>Sign Up</OptionSelectedText>
            <OptionSelectedBar />
          </OptionSelected>
          <OptionNoSelected onPress={() => goSignIn()}>
            <OptionNoSelectedText>Sign In</OptionNoSelectedText>
          </OptionNoSelected>
        </OptionsSignContainer>
      </Container>
    );
  }

  return (
    <Container>
      <UserBox backgroundColor={'#84BCDA'}>
        <Image source={UserIcon} />
      </UserBox>
      <OptionsSignContainer>
        <OptionSelected>
          <OptionSelectedText>Sign In</OptionSelectedText>
          <OptionSelectedBar />
        </OptionSelected>
        <OptionNoSelected onPress={() => goSignUp()}>
          <OptionNoSelectedText>Sign Up</OptionNoSelectedText>
        </OptionNoSelected>
      </OptionsSignContainer>
    </Container>
  );
}

export default memo(Header);
// Desenvolvido por Hubert Ryan
