import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddBtnComponent from '../../components/AddBtnComponent';
import TaskCardComponent from '../../components/TaskCardComponent';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getTodoById } from '../../redux/slices/todoSlice';
import { HomeTabScreenProps } from '../../navigation/types';

export type Task = {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

const TodoScreen = ({ navigation }: HomeTabScreenProps<'Home'>) => {
  const todoList = useAppSelector(state => state.todos.todos);
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={styles.screen}>
      {/* Main container starts */}

      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCardComponent
            task={item}
            onPress={() => {
              dispatch(getTodoById(item.id));
              navigation.navigate('Details');
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
