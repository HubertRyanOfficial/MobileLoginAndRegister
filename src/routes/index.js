import React, { useEffect } from 'react';

// modules
import auth from '@react-native-firebase/auth';
import store from '../config/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { defaultNavigatorConfig } from '../utils/defaultNavigatorConfig';
import { connect } from 'react-redux';

// screens

import Login from './Login';
import SignUp from './SignUp';
import Forgot from './Forgot';
import VerifyUser from './VerifyUser';
import Welcome from './Welcome';

const Stack = createStackNavigator();

function Routes({ userState }) {
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const currentUser = await auth().currentUser;

      if (currentUser) {
        store.dispatch({ type: 'UPDATE_USER_STATE', playload: true });
      } else {
        store.dispatch({ type: 'UPDATE_USER_STATE', playload: false });
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
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigatorConfig}>
        {!userState ? (
          <>
            {/* <Stack.Screen name="VerifyUser" component={VerifyUser} /> */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Forgot" component={Forgot} />
          </>
        ) : (
          <Stack.Screen name="Welcome" component={Welcome} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// states

const mapStateToProps = (store) => ({
  userState: store,
});

export default connect(mapStateToProps, null)(Routes);
// Desenvolvido por Hubert Ryan
