import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddBtnComponent from '../../components/AddBtnComponent';
import TaskCardComponent from '../../components/TaskCardComponent';
import { getTodoById } from '../../redux/slices/todoSlice';
import { HomeTabScreenProps } from '../../navigation/types';
import { useEffect, useState } from 'react';
import {
  FirebaseAuthTypes,
  getAuth,
  onAuthStateChanged,
} from '@react-native-firebase/auth';
import { FirestoreParams } from '../../types/FirestoreParamas';
import { deleteTodoFromFirestore, getTodosFromFirestore, updateTodoInFirestore } from '../../utils/Firestore';

const TodoScreen = ({ navigation }: HomeTabScreenProps<'Home'>) => {
  // const todoList = useAppSelector(state => state.todos.todos);
  // const dispatch = useAppDispatch();

  const [todos, setTodos] = useState<FirestoreParams[]>([]);
  const [loading, setLoading] = useState(true);
  const user = getAuth().currentUser;

  useEffect(() => {
    const loadTodos = async () => {
      setLoading(true);
      try {
        const data = await getTodosFromFirestore();
        if (data) console.log(data);
        setTodos(data);
      } catch (error) {
        console.error('Failed to load todos', error);
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  // useEffect(() => {
  //   if (todoList.length === 0) {
  //     Toast.show({
  //       type: 'info',
  //       text1: 'No todos',
  //       text2: 'Press the + button to add todos.',
  //     });
  //   }
  // }, [todoList]);

  const handleOnDelete = async (id:string) => {
    await deleteTodoFromFirestore(id);
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const handleCheckboxPress = async (id:string) => {
    await updateTodoInFirestore(id);
     setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)
  );
  }

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
              navigation.navigate('Details');
            }}
            onDelete= {() =>{handleOnDelete(item.id)}}
            onCheckboxPress = {() => {handleCheckboxPress(item.id)}}

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
