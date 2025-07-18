import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopParamList } from './types';
import AllTodoScreen from '../screens/MenuTopTab/AllTodoScreen';
import ActiveTodoScreen from '../screens/MenuTopTab/ActiveTodoScreen';
import CompletedTodoScreen from '../screens/MenuTopTab/CompletedTodoScreen';
import { StyleSheet, View } from 'react-native';

const Tab = createMaterialTopTabNavigator<MaterialTopParamList>();

const MenuTopTabs = () => {
  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle:{
            backgroundColor:'#638265ff',
            width:90,
            marginLeft:16
          },
          tabBarStyle:{
            width:350,
            borderRadius:20,
            shadowColor: "#354236ff",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.4,
            shadowRadius:4,
            marginTop:15,
            margin:'auto',
          }
        }}
      >
        <Tab.Screen name="All" component={AllTodoScreen}  />
        <Tab.Screen name="Active" component={ActiveTodoScreen} />
        <Tab.Screen name="Completed" component={CompletedTodoScreen} />
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
