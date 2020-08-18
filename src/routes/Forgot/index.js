import React, { useState, useCallback } from 'react';

// modules

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

// components

import {
  StatusBar,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';

import {
  Container,
  MiddleContainer,
  MiddleTitle,
  MiddleSubTitle,
  InputsContainer,
  EmailInput,
  BottomContainer,
  BottomButton,
  Button,
} from './styles';

import Header from '../../components/Header';

// images

import NextIcon from '../../../assets/i_next.png';

function Forgot() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('hubertryanofficial@gmail.com');
  const [loading, setLoading] = useState(false);

  async function getCredentials() {
    console.log('Opa');
    try {
      if (email && email.includes('@') && email.includes('.')) {
        if (!loading) {
          setLoading(true);
        }
        await auth().sendPasswordResetEmail(email);
        ToastAndroid.show('E-mail sent!', ToastAndroid.SHORT);
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case 'auth/user-not-found':
          ToastAndroid.show('Ususário não encontrado!', ToastAndroid.SHORT);
          break;
        case 'auth/wrong-password':
          ToastAndroid.show('Senha incorreta!', ToastAndroid.SHORT);
          break;
        default:
          break;
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header type={'signin'} />
      <MiddleContainer>
        <MiddleTitle>Forgot Password,</MiddleTitle>
        <MiddleSubTitle>Tell me your e-mail</MiddleSubTitle>

        <InputsContainer>
          <EmailInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email address"
            placeholderTextColor="#ddd"
            editable={!loading}
          />
        </InputsContainer>
      </MiddleContainer>

      <BottomContainer>
        <Button onPress={getCredentials} disabled={loading}>
          <BottomButton>
            {!loading ? (
              <Image source={NextIcon} />
            ) : (
              <ActivityIndicator color="#fff" size="small" />
            )}
          </BottomButton>
        </Button>
      </BottomContainer>
    </Container>
  );
}

export default Forgot;
// Desenvolvido por Hubert Ryan
