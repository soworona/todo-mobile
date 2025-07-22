import * as React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/RootStack';
import { PersistGate } from 'redux-persist/integration/react';
import Toast, { BaseToast } from 'react-native-toast-message';

export default function App() {

  const toastConfig = {
  success: (props:any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink', borderRadius:25, borderLeftWidth:29 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  )
}


  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      <Toast config={toastConfig}/>
      </PersistGate>
    </Provider>
  );
}
