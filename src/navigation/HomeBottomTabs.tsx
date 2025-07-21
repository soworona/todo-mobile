import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import ProfileScreen from "../screens/HomeBottomTab/ProfileScreen";
import { BottomTabParamList } from "./types";
import TodoScreen from "../screens/HomeBottomTab/TodoScreen";
import MenuTopTabs from "./MenuTopTabs";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const HomeBottomTabs= () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: '#638265ff', height: 70 },
        tabBarInactiveTintColor: '#dae2da',
        tabBarActiveTintColor: 'white',
        headerShown:true,
        headerStyle: { backgroundColor:'#638265ff',},
        headerTintColor:'#dae2da',
        headerTitleStyle: {
          fontWeight: '300',
          fontSize: 20,
        },
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
        component={MenuTopTabs}
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

export default HomeBottomTabs;