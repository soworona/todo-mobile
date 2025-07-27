import * as React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { PersistGate } from 'redux-persist/integration/react';
import Toast, { BaseToast } from 'react-native-toast-message';
import { useEffect, useState } from 'react';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

export default function App() {
  
  //Toast
  const toastConfig = {
    success: (props: any) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: 'pink',
          borderLeftWidth: 5,
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          shadowColor: 'pink',
        }}
        contentContainerStyle={{ paddingHorizontal: 25 }}
      />
    ),
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
}
