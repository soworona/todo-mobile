import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddBtnComponent from '../components/AddBtnComponent';
import { useNavigation } from '@react-navigation/native';
import TaskCardComponent from '../components/TaskCardComponent';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { getTodoById } from '../redux/slices/todoSlice';

export type Task = {
  id:string;
  title: string;
  description: string;
  isComplete: boolean;
};

const Todo = () => {
  const navigation = useNavigation();
  const todoList = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();
  
  return (
    <SafeAreaView style={styles.screen}>
      {/* Main container starts */}
      <ScrollView style={styles.container}>
        {todoList.map((task, index) => (
          <TaskCardComponent
            task={task}
            onPress={() => {
              dispatch(getTodoById(task.id));
              navigation.navigate('Details');
            }}
          />
        ))}
      </ScrollView>

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
    overflow: 'scroll',
  },
  baseTxt: {
    fontSize: 24,
    fontWeight: 800,
    textAlign: 'center',
  },
});

export default Todo;
