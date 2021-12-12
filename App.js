/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {Text} from 'react-native';
import configureStore from './configureStore';
import AppC from './app/containers/App';

const {store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppC />
    </Provider>
  );
};

export default App;
