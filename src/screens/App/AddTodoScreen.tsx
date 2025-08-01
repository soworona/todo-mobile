import { Text, View } from 'react-native';
import InputComponent from '../../components/InputComponent';
import { useState } from 'react';
import BtnComponent from '../../components/BtnComponent';
import { RootStackScreenProps } from '../../navigation/types';
import { nanoid } from '@reduxjs/toolkit';
import { addToFirestore } from '../../utils/TodoFirestore';
import DateTimePickerComponent from '../../components/DateTimePickerComponent';
import { scheduleNotification } from '../../utils/Notifee';

const AddTodoScreen = ({ navigation }: RootStackScreenProps<'AddTodo'>) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  // const dispatch = useAppDispatch();

  const handleSaveTodo = async() => {
    // dispatch(addTodo({ title, description }));
    const taskId = nanoid()
    addToFirestore({
      id: taskId,
      title,
      description,
      isComplete: false,
      dueDate: date
    });
    navigation.goBack();

    const n = await scheduleNotification(taskId, title, date);
  };

  return (
    <View style={styles.container}>
      <InputComponent label="Title" value={title} onChangeText={setTitle} />
      <InputComponent
        label="Description"
        value={description}
        onChangeText={setDescription}
      />
      <View>
        <Text style={{ fontSize: 14 }}>Due on</Text>
        <DateTimePickerComponent date={date} onChange={setDate}/>
      </View>

      <BtnComponent label="Save" onPress={handleSaveTodo} />
      <BtnComponent
        label="Cancel"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    padding: 20,
    gap: 5,
  },
  dateSection: {},
};
export default AddTodoScreen;
