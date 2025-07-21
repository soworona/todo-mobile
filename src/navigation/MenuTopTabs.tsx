import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopParamList } from './types';
import AllTodoScreen from '../screens/MenuTopTab/AllTodoScreen';
import ActiveTodoScreen from '../screens/MenuTopTab/ActiveTodoScreen';
import CompletedTodoScreen from '../screens/MenuTopTab/CompletedTodoScreen';
import { StyleSheet, View } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-icons';

const Tab = createMaterialTopTabNavigator<MaterialTopParamList>();

const MenuTopTabs = () => {
  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: '#9dcaa0ff',
            width: 90,
            marginLeft: 10,
          },
          tabBarStyle: {
            width: 360,
            borderRadius: 20,
            shadowColor: '#354236ff',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius: 4,
            marginTop: 15,
            margin: 'auto',
          },
        }}
      >
        <Tab.Screen
          name="All"
          component={AllTodoScreen}
          
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="auto-awesome"
                  color={focused ? '' : 'gray'}
                  size={18}
                  style={{
                    position: 'absolute',
                    right: 18,
                    top: 5,
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Active"
          component={ActiveTodoScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="goat"
                  color={focused ? 'black' : 'gray'}
                  size={18}
                  style={{
                    position: 'absolute',
                    right: 26,
                    top: 5,
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Completed"
          component={CompletedTodoScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialIcons
                  name="local-florist"
                  color={focused ? 'black' : 'gray'}
                  size={18}
                  style={{
                    position: 'absolute',
                    right: 40,
                    top: 5,
                  }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
  },
});

export default MenuTopTabs;
