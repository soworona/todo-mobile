import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import DetailsScreen from './src/screens/DetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/ProfileScreen';
import MenuScreen from './src/screens/MenuScreen';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from '@react-native-vector-icons/material-icons';

export type StackParamList = {
  Home: undefined;
  AddTodo: undefined;
  Details: undefined;
};

export type BottomTabParamList ={
  HomeTab: undefined,
  Menu: undefined,
  Profile: undefined
}

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: '#638265ff', height: 70 },
        tabBarInactiveTintColor: '#dae2da',
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="menu" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="face-3" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="AddTodo" component={AddTodoScreen} 
          options={{
            transitionSpec:{
              open: config,
              close: config
            }
          }}/>
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

