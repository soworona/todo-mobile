import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import { createStaticNavigation } from '@react-navigation/native';
import ActiveScreen from './screen/ActiveScreen';
import CompletedScreen from './screen/CompletedScreen';
import AllScreen from './screen/AllScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Active: ActiveScreen,
    Completed: CompletedScreen,
    All: AllScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
