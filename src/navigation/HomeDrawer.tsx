import { createDrawerNavigator } from '@react-navigation/drawer';
import ActiveTodoScreen from '../screens/MenuTopTab/ActiveTodoScreen';
import CompletedTodoScreen from '../screens/MenuTopTab/CompletedTodoScreen';
import { HomeDrawerParamList } from './types';

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Active" component={ActiveTodoScreen} />
      <Drawer.Screen name="Completed" component={CompletedTodoScreen} />
    </Drawer.Navigator>
  );
}