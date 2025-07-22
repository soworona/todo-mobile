import { createDrawerNavigator } from '@react-navigation/drawer';
import ActiveTodoScreen from '../screens/MenuTopTab/ActiveTodoScreen';
import CompletedTodoScreen from '../screens/MenuTopTab/CompletedTodoScreen';
import { MenuDrawerParamList } from './types';
import HomeBottomTabs from './HomeBottomTabs';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator<MenuDrawerParamList>();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#638265ff' },
        headerTintColor: '#dae2da',
        headerTitleStyle: {
          fontWeight: '300',
          fontSize: 20,
        },
        drawerActiveTintColor: 'green',
        drawerType: 'slide',
        drawerStatusBarAnimation: 'fade',
      }}
    >
      <Drawer.Screen
        name="BottomTab"
        component={HomeBottomTabs}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
          let headerTitle = 'Todo App';

          if (routeName === 'Home') headerTitle = 'Todo Home';
          else if (routeName === 'Menu') headerTitle = 'Todo Menu';
          else if (routeName === 'Profile') headerTitle = 'My Profile';

          return {
            title: headerTitle,
          };
        }}
      />
      <Drawer.Screen name="Completed" component={CompletedTodoScreen} />
      <Drawer.Screen name="Active" component={ActiveTodoScreen} />
    </Drawer.Navigator>
  );
}
