import React from 'react';

// modules

// components
import { StatusBar } from 'react-native';

import { Container } from './styles';

import Header from '../../components/Header';

function Login() {
  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header type={'signin'} />
    </Container>
  );
}

export default Login;
// Desenvolvido por Hubert Ryan
