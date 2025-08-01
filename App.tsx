import * as React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { PersistGate } from 'redux-persist/integration/react';
import Toast, { BaseToast } from 'react-native-toast-message';
import { useEffect, useState } from 'react';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { PermissionsAndroid, Platform } from 'react-native';
import { createNotifeeChannel } from './src/utils/Notifee';
import { checkToken } from './src/utils/FMC';

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

useEffect(() => {
    const setupNotifications = async () => {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      }

      await createNotifeeChannel();
      await checkToken();

      // const unsubscribe = handleForegroundMessage();
      // return unsubscribe; 
    };

    setupNotifications();
  }, []);
  
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
