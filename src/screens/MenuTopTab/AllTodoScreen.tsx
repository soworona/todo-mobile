import { ScrollView, StyleSheet, View } from 'react-native';
import TaskCardComponent from '../../components/TaskCardComponent';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getTodoById } from '../../redux/slices/todoSlice';
import { MenuTopTabScreenProps } from '../../navigation/types';

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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default AllTodoScreen;
