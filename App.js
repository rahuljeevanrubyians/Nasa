/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
// import 'react-native-gesture-handler';
import AppNavigator from './src/components/router';
import store from './src/components/store';

//
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
