import React from 'react';

// modules

import store from '../../config/store';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

// components

import { StatusBar } from 'react-native';
import { Container, Title, SubTitle, Button, ButtonText } from './styles';

function Welcome() {
  const navigation = useNavigation();

  async function goSignOut() {
    await auth().signOut();
    store.dispatch({ type: 'UPDATE_USER_STATE', playload: false });
    navigation.navigate('Login');
  }

  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Title>Welcome</Title>
      <SubTitle>What's going on?</SubTitle>
      <Button onPress={goSignOut}>
        <ButtonText>Sign Out</ButtonText>
      </Button>
    </Container>
  );
}

export default Welcome;
// Desenvolvido por Hubert Ryan
