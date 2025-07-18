import { ScrollView, View } from 'react-native';
import TaskCardComponent from '../../components/TaskCardComponent';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getTodoById } from '../../redux/slices/todoSlice';
import { MenuTopTabScreenProps } from '../../navigation/types';
import { styles } from './styles';

const AllTodoScreen = ({ navigation }: MenuTopTabScreenProps<'All'>) => {
  const todoList = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {todoList.map(task => (
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



export default AllTodoScreen;
