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

function SignUp() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('hubertryanofficial@gmail.com');
  const [password, setPassword] = useState('123456');
  const [passwordAgain, setPasswordAgain] = useState('123456');
  const [loading, setLoading] = useState(false);

  const getCredentials = useCallback(async () => {
    console.log('Opa');
    try {
      if (
        email &&
        email.includes('@') &&
        email.includes('.') &&
        password &&
        passwordAgain &&
        password === passwordAgain
      ) {
        if (!loading) {
          setLoading(true);
        }
        await auth().createUserWithEmailAndPassword(email, password);
        navigation.navigate('Welcome');
      } else if (password !== passwordAgain) {
        throw 'different passwords';
      }
    } catch (error) {
      if (error !== 'different passwords') {
        console.log(error.code);
        switch (error.code) {
          case 'auth/weak-password':
            ToastAndroid.show('Senha muito curta!', ToastAndroid.SHORT);
          case 'auth/email-already-in-use':
            ToastAndroid.show(
              'Este e-mail já está em uso!',
              ToastAndroid.SHORT,
            );
          default:
            break;
        }
      } else {
        ToastAndroid.show('As senhas não estão corretas!', ToastAndroid.SHORT);
      }
    } finally {
      setLoading(false);
    }
  }, [email, password]);

  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header type={'signup'} />
      <MiddleContainer>
        <MiddleTitle>Hello,</MiddleTitle>
        <MiddleSubTitle>Enter your informations bellow</MiddleSubTitle>

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
          <PasswordInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#ddd"
            editable={!loading}
          />
          <PasswordInput
            value={passwordAgain}
            onChangeText={(text) => setPasswordAgain(text)}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            placeholder="Password again"
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

export default SignUp;
// Desenvolvido por Hubert Ryan
