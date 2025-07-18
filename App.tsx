import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodoScreen from './src/screens/AddTodoScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import DetailsScreen from './src/screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { StackParamList } from './src/navigation/types';
import HomeTabs from './src/navigation/HomeBottomTab';

const Stack = createNativeStackNavigator<StackParamList>();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeTabs} 
          options={{
            animation: 'simple_push',
            headerShown: false
          }}/>
          <Stack.Screen name="AddTodo" component={AddTodoScreen} 
          options={{
            animation: 'slide_from_bottom',
            headerLeft: props => <MaterialIcons name='arrow-back-ios-new' size={25} style={{ marginRight: 5}}/>
            }}
            
            />
          <Stack.Screen name="Details" component={DetailsScreen}
          options={{
            animation: 'slide_from_bottom',
            headerLeft: props => <MaterialIcons name='arrow-back-ios-new' size={25} style={{ marginRight: 5}}/>
          }}
          
           />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

