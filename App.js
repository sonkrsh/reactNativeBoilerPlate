/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, Text} from 'react-native';
import configureStore from './configureStore';
import LoginScreen from './app/containers/LoginScreen';
const {store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};

export default App;
