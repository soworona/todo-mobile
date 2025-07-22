import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import ActiveTodoScreen from '../screens/MenuTopTab/ActiveTodoScreen';
import CompletedTodoScreen from '../screens/MenuTopTab/CompletedTodoScreen';
import { MenuDrawerParamList } from './types';
import HomeBottomTabs from './HomeBottomTabs';
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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
        headerRight: () => (
          <View style={{ marginRight: 20 }}>
            <Image
              source={require('../assets/Zhongli_Icon.webp')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#f8f6efff',
              }}
            />
          </View>
        ),
        drawerActiveTintColor: 'green',
        drawerType: 'slide',
        drawerStatusBarAnimation: 'fade',
      }}
      drawerContent={props => {
        return (
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={require('../assets/wallhaven-x69pdo.png')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 230,
                marginBottom: 20,
              }}
            >
              <View style={{ gap: 3 }}>
                <Image
                  source={require('../assets/Zhongli_Icon.webp')}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth: 1,
                    borderColor: 'white',
                    backgroundColor: '#f8f6efff',
                  }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                  }}
                >
                  Profile
                </Text>
              </View>
            </ImageBackground>
            <DrawerItemList {...props} />
          </View>
        );
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
