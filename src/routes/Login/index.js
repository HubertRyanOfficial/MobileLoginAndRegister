import React, { useState, useCallback } from 'react';

// modules

import store from '../../config/store';
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

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('hubertryanofficial@gmail.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  async function getCredentials() {
    console.log('Opa');
    try {
      if (email && email.includes('@') && email.includes('.') && password) {
        if (!loading) {
          setLoading(true);
        }
        await auth().signInWithEmailAndPassword(email, password);

        store.dispatch({ type: 'UPDATE_USER_STATE', playload: true });
        navigation.navigate('Welcome');
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

  const goForgot = useCallback(() => {
    navigation.navigate('Forgot');
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Header type={'signin'} />
      <MiddleContainer>
        <MiddleTitle>Welcome back,</MiddleTitle>
        <MiddleSubTitle>Gave</MiddleSubTitle>

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
        </InputsContainer>
      </MiddleContainer>

      <ForgotPasswordContainer onPress={goForgot}>
        <ForgotPasswordText>Forgot password?</ForgotPasswordText>
      </ForgotPasswordContainer>

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

export default Login;
// Desenvolvido por Hubert Ryan
