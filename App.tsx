import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { createStaticNavigation } from '@react-navigation/native';
import AddTodoScreen from './src/screens/AddTodoScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'
import DetailsScreen from './src/screens/DetailsScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    AddTodo: AddTodoScreen,
    Details: DetailsScreen
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
