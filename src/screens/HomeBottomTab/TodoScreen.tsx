import { getAuth } from '@react-native-firebase/auth';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, PermissionsAndroid, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddBtnComponent from '../../components/AddBtnComponent';
import TaskCardComponent from '../../components/TaskCardComponent';
import { HomeTabScreenProps } from '../../navigation/types';
import { checkToken, handleForegroundMessage } from '../../utils/FMC';
import {
  deleteTodoFromFirestore,
  getTodoDetails,
  getTodosFromFirestore,
  updateTodoInFirestore,
} from '../../utils/TodoFirestore';
import { TodoFirestoreParams } from '../../types/FirestoreParams';
import { createNotifeeChannel } from '../../utils/Notifee';

const TodoScreen = ({ navigation }: HomeTabScreenProps<'Home'>) => {
  // const todoList = useAppSelector(state => state.todos.todos);
  // const dispatch = useAppDispatch();

  const [todos, setTodos] = useState<TodoFirestoreParams[]>([]);
  const [loading, setLoading] = useState(true);
  const user = getAuth().currentUser;

  useFocusEffect(
    useCallback(() => {
      const loadTodos = async () => {
        setLoading(true);
        try {
          const data = await getTodosFromFirestore();
          setTodos(data);
        } catch (error) {
          console.error('Failed to load todos', error);
        } finally {
          setLoading(false);
        }
      };

      loadTodos();
    }, []),
  );



  // useEffect(() => {
  //   if (todoList.length === 0) {
  //     Toast.show({
  //       type: 'info',
  //       text1: 'No todos',
  //       text2: 'Press the + button to add todos.',
  //     });
  //   }
  // }, [todoList]);

  const handleOnDelete = async (id: string) => {
    await deleteTodoFromFirestore(id);
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleCheckboxPress = async (id: string) => {
    await updateTodoInFirestore(id);
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo,
      ),
    );
  };

  const handlePress = (id: string) => {
    // const todo = await getTodoDetails(id);
    navigation.navigate('Details', { id });
  };

  return (
    <SafeAreaView style={styles.screen}>
      {/* Main container starts */}

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCardComponent
            task={item}
            onPress={() => {
              // dispatch(getTodoById(item.id));
              handlePress(item.id);
            }}
            onDelete={() => {
              handleOnDelete(item.id);
            }}
            onCheckboxPress={() => {
              handleCheckboxPress(item.id);
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
