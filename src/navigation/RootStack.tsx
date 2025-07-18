import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './types';
import AddTodoScreen from '../screens/RootStack/AddTodoScreen';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import DetailsScreen from '../screens/RootStack/DetailsScreen';
import HomeTabs from './HomeBottomTabs';

const Stack = createNativeStackNavigator<StackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Todo">
      <Stack.Screen
        name="Todo"
        component={HomeTabs}
        options={{
          animation: 'simple_push',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddTodo"
        component={AddTodoScreen}
        options={({navigation}) => ({
          animation: 'slide_from_bottom',
          headerLeft: () => (
            <MaterialIcons
              name="clear"
              size={20}
              style={{ paddingRight:15, paddingTop:6}}
              onPress={navigation.goBack}
              />
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation }) => ({
          animation: 'slide_from_bottom',
          headerLeft: () => (
            <MaterialIcons
              name="clear"
              size={20}
              style={{ paddingRight:15, paddingTop:6}}
              onPress={navigation.goBack}
              />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
