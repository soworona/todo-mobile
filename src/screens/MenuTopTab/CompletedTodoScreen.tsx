import { ScrollView, View } from "react-native"
import { styles } from "./styles";
import TaskCardComponent from "../../components/TaskCardComponent";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { MenuTopTabScreenProps } from "../../navigation/types";
import { getTodoById } from "../../redux/slices/todoSlice";

const CompletedTodoScreen = ({navigation}:MenuTopTabScreenProps<'Completed'>) => {
      const todoList = useAppSelector(state => state.todos.todos);
      const activeList = todoList.filter(t => t.isComplete)
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
}

export default CompletedTodoScreen;