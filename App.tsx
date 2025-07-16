import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { createStaticNavigation } from '@react-navigation/native';
import AddTodoScreen from './src/screens/AddTodoSCreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    AddTodo: AddTodoScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return(
    <Provider store={store}>

    <Navigation />
    </Provider>

  );
}
