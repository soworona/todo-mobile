import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddBtnComponent from '../../components/AddBtnComponent';
import TaskCardComponent from '../../components/TaskCardComponent';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getTodoById } from '../../redux/slices/todoSlice';
import { HomeTabScreenProps } from '../../navigation/types';

export type Task = {
  id:string;
  title: string;
  description: string;
  isComplete: boolean;
};

const TodoScreen = ({navigation}:HomeTabScreenProps<'Home'>) => {
  const todoList = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();
  
  return (
    <SafeAreaView style={styles.screen}>
      {/* Main container starts */}
      <ScrollView style={styles.container}>
        {todoList.map(( task ) => (
          <TaskCardComponent
            key={task.id}
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

export default TodoScreen;
