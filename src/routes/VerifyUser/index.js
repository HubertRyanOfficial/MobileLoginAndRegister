import React, { useEffect } from 'react';

// modules

import store from '../../config/store';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

function VerifyUser() {
  const navigation = useNavigation();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const currentUser = await auth().currentUser;

      if (currentUser) {
        store.dispatch({ type: 'UPDATE_USER_STATE', playload: true });
        navigation.navigate('Welcome');
      } else {
        store.dispatch({ type: 'UPDATE_USER_STATE', playload: false });
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error);
      setUser(false);
      ToastAndroid.show(
        'Houve algum error, tente novamente!',
        ToastAndroid.SHORT,
      );
    }
  }
  return null;
}

export default VerifyUser;
// Desenvolvido por Hubert Ryan
