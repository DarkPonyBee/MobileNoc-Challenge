import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Home from './screens/Home';
import {store} from './store/configureStore';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <Test />
    </Provider>
  );
};

export default App;

const Test = () => {
  return (
    <>
      <Home />
    </>
  );
};
