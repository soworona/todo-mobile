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
import { StackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: '#638265ff', height: 70 },
        tabBarInactiveTintColor: '#dae2da',
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="Home"
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

