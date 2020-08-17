import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';

// modules

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import { defaultNavigatorConfig } from './utils/defaultNavigatorConfig';
import { ToastAndroid } from 'react-native';

// all stacks

const Stack = createStackNavigator();

// screens

import VerifyUser from './routes/VerifyUser';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Welcome from './routes/Welcome';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigatorConfig}>
        <Stack.Screen name="VerifyUser" component={VerifyUser} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// Desenvolvido por Hubert Ryan
