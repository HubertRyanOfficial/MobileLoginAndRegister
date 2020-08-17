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

import Login from './routes/Login';
import Welcome from './routes/Welcome';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const currentUser = await auth().currentUser;

      if (user) {
        setUser(currentUser);
      } else {
        setUser(false);
      }
    } catch (error) {
      setUser(false);
      ToastAndroid.show(
        'Houve algum error, tente novamente!',
        ToastAndroid.SHORT,
      );
    }
  }

  if (user === null) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultNavigatorConfig}>
        {!user ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Welcome" component={Welcome} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// Desenvolvido por Hubert Ryan
