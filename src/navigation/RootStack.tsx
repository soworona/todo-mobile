import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "./types";
import AddTodoScreen from "../screens/RootStack/AddTodoScreen";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import DetailsScreen from "../screens/RootStack/DetailsScreen";
import TodoScreen from "../screens/HomeBottomTab/TodoScreen";
import HomeTabs from "./HomeBottomTabs";

const Stack = createNativeStackNavigator<StackParamList>();

const RootStack = () => {
    return(
        <Stack.Navigator initialRouteName="Todo">
          <Stack.Screen name="Todo" component={HomeTabs} 
          options={{
            animation: 'simple_push',
            headerShown: false
          }}/>
          <Stack.Screen name="AddTodo" component={AddTodoScreen} 
          options={{
            animation: 'slide_from_bottom',
            headerLeft: props => <MaterialIcons name='arrow-back-ios-new' size={25} style={{ marginRight: 5}}/>
            }}
            
            />
          <Stack.Screen name="Details" component={DetailsScreen}
          options={{
            animation: 'slide_from_bottom',
            headerLeft: props => <MaterialIcons name='arrow-back-ios-new' size={25} style={{ marginRight: 5}}/>
          }}
          
           />
        </Stack.Navigator>
    )
}


export default RootStack;