import { Text } from '@react-navigation/elements';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Task } from '../screens/HomeBottomTab/TodoScreen';
import CheckBoxComponent from './CheckboxComponent';
import { useAppDispatch } from '../redux/hook';
import { deleteTodo, toggleTodoStatus } from '../redux/slices/todoSlice';
import IconBtnComponent from './IconBtnComponent';

type TaskCardComponentProps = {
  task: Task;
  onPress: () => void;
};

const TaskCardComponent = (props: TaskCardComponentProps) => {
  const dispatch = useAppDispatch();

  const handleCheckBoxPress = () => {
    dispatch(
      toggleTodoStatus({
        id: props.task.id,
        isComplete: !props.task.isComplete,
      }),
    );
  };

  const handleDeleteBtnPress = () => {
    dispatch(deleteTodo({
      id: props.task.id
    }))
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <CheckBoxComponent
        isChecked={props.task.isComplete}
        onPress={handleCheckBoxPress}
      />
      <Text style={styles.smallTxt}>{props.task.title}</Text>
      <View style={styles.icon}>
      <IconBtnComponent icon='home' onPress={handleDeleteBtnPress} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#B2BAB2',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  smallTxt: {
    fontSize: 16,
    fontWeight: 400,
    color:'#2A2C2A'
  },
  icon:{
    position:'absolute',
    right:0
  }
});

export default TaskCardComponent;
