import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackScreenProps, StackParamList } from '../../navigation/types';
import { useEffect, useState } from 'react';
import { getTodoDetails } from '../../utils/TodoFirestore';

type DetailsRouteProp = RouteProp<StackParamList, 'Details'>;

const DetailsScreen = ({ route }: RootStackScreenProps<'Details'>) => {
  // const taskId = useAppSelector(state => state.todos.selectedTodoId);
  // const task = useAppSelector(state =>   state.todos.todos.find(t => t.id === taskId))
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isComplete, setIsComplete] = useState(Boolean);
  const [dueDate, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const id = route.params?.id;
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getTodoDetails(id)
      .then(todo => {
        if (todo) {
          setTitle(todo.title);
          setDescription(todo.description);
          setIsComplete(todo.isComplete);
          setDate(new Date(todo.dueDate));
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Title</Text>
        <Text>{title}</Text>
      </View>
      <View>
        <Text style={styles.heading}>Description</Text>
        <Text>{description}</Text>
      </View>
      <View>
        <Text style={styles.heading}>Status</Text>
        <Text>{isComplete ? 'Complete' : 'Ongoing'}</Text>
      </View>
      <View>
        <Text style={styles.heading}>Due on</Text>
        {/* <Text>
          {new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
            timeZone: 'Asia/Kathmandu',
          }).format(dueDate)}
        </Text> */}
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
    marginBottom: 5,
  },
});

export default DetailsScreen;
