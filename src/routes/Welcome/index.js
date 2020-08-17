import React from 'react';

// modules

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

// components

import { Container, Title, SubTitle, Button, ButtonText } from './styles';

function Welcome() {
  const navigation = useNavigation();

  async function goSignOut() {
    await auth().signOut();
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Title>Welcome</Title>
      <SubTitle>What's going on?</SubTitle>
      <Button onPress={goSignOut}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
  );
}

export default Welcome;
// Desenvolvido por Hubert Ryan
