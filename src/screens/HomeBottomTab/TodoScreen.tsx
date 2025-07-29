import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddBtnComponent from '../../components/AddBtnComponent';
import TaskCardComponent from '../../components/TaskCardComponent';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getTodoById } from '../../redux/slices/todoSlice';
import { HomeTabScreenProps } from '../../navigation/types';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import {
  FirebaseAuthTypes,
  getAuth,
  onAuthStateChanged,
} from '@react-native-firebase/auth';



const TodoScreen = ({ navigation }: HomeTabScreenProps<'Home'>) => {
  const todoList = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();
  
  // useEffect(() => {
  //   if (todoList.length === 0) {
  //     Toast.show({
  //       type: 'info',
  //       text1: 'No todos',
  //       text2: 'Press the + button to add todos.',
  //     });
  //   }
  // }, [todoList]);

    return (
      <SafeAreaView style={styles.screen}>
        {/* Main container starts */}

        <FlatList
          data={todoList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TaskCardComponent
              task={item}
              onPress={() => {
                dispatch(getTodoById(item.id));
                navigation.navigate('Details');
              }}
            />
          )}
          contentContainerStyle={styles.container}
        />

        {/* Main container ends */}
        <AddBtnComponent
          onPress={() => {
            navigation.navigate('AddTodo');
          }}
        />
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  container: {
    zIndex: 0,
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  baseTxt: {
    fontSize: 24,
    fontWeight: 800,
    textAlign: 'center',
  },
});

export default TodoScreen;
