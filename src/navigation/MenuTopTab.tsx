import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopParamList } from './types';
import AllTodoScreen from '../screens/MenuTopTab/AllTodoScreen';
import ActiveTodoScreen from '../screens/MenuTopTab/ActiveTodoScreen';
import CompletedTodoScreen from '../screens/MenuTopTab/CompletedTodoScreen';

const Tab = createMaterialTopTabNavigator<MaterialTopParamList>();

const MenuTopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={AllTodoScreen} />
      <Tab.Screen name="Active" component={ActiveTodoScreen} />
      <Tab.Screen name="Completed" component={CompletedTodoScreen} />
    </Tab.Navigator>
  );
};

export default MenuTopTabs;
