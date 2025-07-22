import * as React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootStack />
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
