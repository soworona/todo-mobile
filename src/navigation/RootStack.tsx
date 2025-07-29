import { useEffect, useState } from 'react';
import {
  FirebaseAuthTypes,
  getAuth,
  onAuthStateChanged,
} from '@react-native-firebase/auth';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const RootStack = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [initializing, setInitializing] = useState(true);

  function handleAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber;
  });

  if (initializing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#78a381ff" />
      </View>
    );
  }

  return  user ? <AppStack /> : <AuthStack />

  // return (
  //   <Stack.Navigator initialRouteName={user ? 'Todo' : 'Login'}>
  //     <Stack.Screen name="Signup" component={SignupScreen} />
  //     <Stack.Screen name="Login" component={LoginScreen} />
  //     <Stack.Screen
  //       name="Todo"
  //       component={HomeDrawer}
  //       options={{
  //         animation: 'simple_push',
  //         headerShown: false,
  //       }}
  //     />
  //     <Stack.Screen
  //       name="AddTodo"
  //       component={AddTodoScreen}
  //       options={({ navigation }) => ({
  //         animation: 'slide_from_bottom',
  //         headerStyle: { backgroundColor: '#96a196ff' },
  //         headerTintColor: '#e8e9ecff',
  //         headerLeft: () => (
  //           <MaterialIcons
  //             name="clear"
  //             color={'#e8e9ecff'}
  //             size={20}
  //             style={{ paddingRight: 15, paddingTop: 6 }}
  //             onPress={navigation.goBack}
  //           />
  //         ),
  //       })}
  //     />
  //     <Stack.Screen
  //       name="Details"
  //       component={DetailsScreen}
  //       options={({ navigation }) => ({
  //         animation: 'slide_from_bottom',
  //         headerStyle: { backgroundColor: '#96a196ff' },
  //         headerTintColor: '#e8e9ecff',
  //         headerLeft: () => (
  //           <MaterialIcons
  //             name="clear"
  //             color={'#e8e9ecff'}
  //             size={20}
  //             style={{ paddingRight: 15, paddingTop: 6 }}
  //             onPress={navigation.goBack}
  //           />
  //         ),
  //       })}
  //     />
  //   </Stack.Navigator>
  // );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootStack;
