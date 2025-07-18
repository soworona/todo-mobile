import { ScrollView, View } from 'react-native';
import TaskCardComponent from '../../components/TaskCardComponent';
import { getTodoById } from '../../redux/slices/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { MenuTopTabScreenProps } from '../../navigation/types';
import { styles } from './styles';

const ActiveTodoScreen = ({ navigation }: MenuTopTabScreenProps<'Active'>) => {
  const todoList = useAppSelector(state => state.todos.todos);
  const activeList = todoList.filter(t => !t.isComplete)
  const dispatch = useAppDispatch();
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {activeList.map(task => (
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
    </View>
  );
};

export default ActiveTodoScreen;
