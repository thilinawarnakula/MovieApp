
import React, {Component} from 'react';
import RootNavigator from '../src/navigation/RootNavigator';
import {
  View,
  LogBox
} from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/reducers';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    LogBox.ignoreAllLogs();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
        <View style={{ flex: 1 }}>
          <RootNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
