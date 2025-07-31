import { View } from 'react-native';
import InputComponent from '../../components/InputComponent';
import { useState } from 'react';
import BtnComponent from '../../components/BtnComponent';
import { RootStackScreenProps } from '../../navigation/types';
import { nanoid } from '@reduxjs/toolkit';
import { addToFirestore } from '../../utils/TodoFirestore';
import DateTimePickerComponent from '../../components/DateTimePickerComponent';

const AddTodoScreen = ({ navigation }: RootStackScreenProps<'AddTodo'>) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const dispatch = useAppDispatch();

  const handleSaveTodo = () => {
    // dispatch(addTodo({ title, description }));
    addToFirestore({
      id: nanoid(),
      title,
      description,
      isComplete: false,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <InputComponent label="Title" value={title} onChangeText={setTitle} />
      <InputComponent
        label="Description"
        value={description}
        onChangeText={setDescription}
      />
      <DateTimePickerComponent />
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
};
export default AddTodoScreen;
