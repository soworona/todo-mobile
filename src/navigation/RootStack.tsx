import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "./types";
import HomeTabs from "./HomeBottomTab";
import AddTodoScreen from "../screens/AddTodoScreen";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator<StackParamList>();

const RootStack = () => {
    return(
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeTabs} 
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