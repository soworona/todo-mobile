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
  const [dueDate, setDate] = useState('');
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

          const parsedDate = todo.dueDate.toDate();
          const parsedDateString =  formatDateToCustomString(parsedDate);
          setDate(parsedDateString);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  const formatDateToCustomString = (date: Date) =>  {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0'); 
  const day = `${date.getDate()}`.padStart(2, '0');

  let hours = date.getHours();
  const minutes = `${date.getMinutes()}`.padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedTime = `${hours}:${minutes} ${ampm}`;

  return `${year}-${month}-${day} ${formattedTime}`;
}


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
        <Text>{dueDate}</Text>
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
