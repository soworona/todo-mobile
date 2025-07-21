import { createDrawerNavigator } from '@react-navigation/drawer';
import ActiveTodoScreen from '../screens/MenuTopTab/ActiveTodoScreen';
import CompletedTodoScreen from '../screens/MenuTopTab/CompletedTodoScreen';
import MenuTopTabs from './MenuTopTabs';
import { MenuDrawerParamList } from './types';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import HomeBottomTabs from './HomeBottomTabs';

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
      }}
    >
      <Drawer.Screen name="Todo App" component={HomeBottomTabs} />
      <Drawer.Screen name="Completed" component={CompletedTodoScreen} />
      <Drawer.Screen name="Active" component={ActiveTodoScreen} />
    </Drawer.Navigator>
  );
}
