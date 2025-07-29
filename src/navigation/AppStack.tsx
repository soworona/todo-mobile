import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeDrawer from './HomeDrawer';
import AddTodoScreen from '../screens/App/AddTodoScreen';
import DetailsScreen from '../screens/App/DetailsScreen';
import { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeDrawer"
        component={HomeDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AddTodo" component={AddTodoScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
