import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { createStaticNavigation } from '@react-navigation/native';
import ActiveScreen from './src/screens/ActiveScreen';
import CompletedScreen from './src/screens/CompletedScreen';
import AllScreen from './src/screens/AddTodoSCreen';
import AddTodoScreen from './src/screens/AddTodoSCreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    AddTodo: AddTodoScreen,
    Completed: CompletedScreen,
    All: AllScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
