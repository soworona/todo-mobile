import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import MenuScreen from "../screens/HomeBottomTab/MenuScreen";
import ProfileScreen from "../screens/HomeBottomTab/ProfileScreen";
import { BottomTabParamList } from "./types";
import TodoScreen from "../screens/HomeBottomTab/TodoScreen";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const HomeTabs= () => {
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
        component={TodoScreen}
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
};

export default HomeTabs;