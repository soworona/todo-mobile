import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}

