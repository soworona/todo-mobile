import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Toast, { BaseToast } from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootStack from './src/navigation/RootStack';
import { persistor, store } from './src/redux/store';
import { checkToken, handleForegroundMessage } from './src/utils/FirebaseMessaging';
import { createNotifeeChannel } from './src/utils/Notifee';

import notifee, { EventType } from '@notifee/react-native';

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
      const deviceToken = await checkToken();
      console.log("device token", deviceToken);

      const unsubscribe = handleForegroundMessage();
      return unsubscribe

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
