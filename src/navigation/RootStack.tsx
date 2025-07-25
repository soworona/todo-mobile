import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamList } from './types';
import AddTodoScreen from '../screens/RootStack/AddTodoScreen';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import DetailsScreen from '../screens/RootStack/DetailsScreen';
import HomeDrawer from './HomeDrawer';
import SignupScreen from '../screens/RootStack/SignupScreen';
import LoginScreen from '../screens/RootStack/LoginScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator 
    initialRouteName="Login">
      <Stack.Screen
      name ="Signup"
      component={SignupScreen}/>
      <Stack.Screen
      name = "Login"
      component={LoginScreen} />
      <Stack.Screen
        name="Todo"
        component={HomeDrawer}
        options={{
          animation: 'simple_push',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AddTodo"
        component={AddTodoScreen}
        options={({navigation}) => ({
          animation: 'slide_from_bottom',
          headerStyle:{backgroundColor:'#96a196ff'},
          headerTintColor:'#e8e9ecff',
          headerLeft: () => (
            <MaterialIcons
              name="clear"
              color={'#e8e9ecff'}
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
          headerStyle:{backgroundColor:'#96a196ff', },
          headerTintColor:'#e8e9ecff',
          headerLeft: () => (
            <MaterialIcons
              name="clear"
              color={'#e8e9ecff'}
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