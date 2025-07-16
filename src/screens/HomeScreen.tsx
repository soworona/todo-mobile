import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddBtnComponent from '../components/AddBtnComponent';
import IconBtnComponent from '../components/IconBtnComponent';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import TaskCardComponent from '../components/TaskCardComponent';

export type Task = {
  title: string;
  description: string;
  isComplete: boolean;
};

type TodoRouteParams = {
  newTodo?: {
    title: string;
    description: string;
    isComplete: boolean;
  };
};

const Todo = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ Home: TodoRouteParams }, 'Home'>>();
  const [todoList, setTodoList] = useState<Task[]>([]);

  useEffect(() => {
    const newTodo = route.params?.newTodo as Task;
    if (newTodo) {
      setTodoList(prev => [...prev, newTodo]);
      console.log('Added new todo:', newTodo);
    }
  }, [route.params?.newTodo]);

  return (
    <SafeAreaView style={styles.screen}>
      {/* Main container starts */}
      <ScrollView style={styles.container}>
        {todoList.map((task, index) => (
          <TaskCardComponent key={index} task={task} />
        ))}
      </ScrollView>

      {/* Main container ends */}

      <View
        style={[
          styles.navbar,
          {
            borderColor: 'gray',
            borderTopWidth: 1,
          },
        ]}
      >
        <IconBtnComponent label="Home" icon="home" onPress={() => {}} />
        <AddBtnComponent
          onPress={() => {
            navigation.navigate('AddTodo');
          }}
        />
        <IconBtnComponent label="Profile" icon="profile" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
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
