import 'react-native-gesture-handler';
import React from 'react';

// modules

import { Provider } from 'react-redux';
import store from './config/store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
// Desenvolvido por Hubert Ryan
