import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../redux/hook';

const DetailsScreen = () => {
  const taskId = useAppSelector(state => state.todos.selectedTodoId);
  const task = useAppSelector(state =>   state.todos.todos.find(t => t.id === taskId))
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Title</Text>
        <Text>{task?.title}</Text>
      </View>
      <View>
        <Text style={styles.heading}>Description</Text>
        <Text>{task?.description}</Text>
      </View>
      <View>
        <Text style={styles.heading}>Status</Text>
        <Text>{(task?.isComplete)? "Complete" : "Ongoing"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 10,
  },
  heading: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 5
  },
});

export default DetailsScreen;
