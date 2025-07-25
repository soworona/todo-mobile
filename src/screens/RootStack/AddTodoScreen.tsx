import {  View } from 'react-native';
import InputComponent from '../../components/InputComponent';
import { useState } from 'react';
import BtnComponent from '../../components/BtnComponent';
import { useAppDispatch } from '../../redux/hook';
import { addTodo } from '../../redux/slices/todoSlice';
import {  RootStackScreenProps, StackParamList } from '../../navigation/types';
import Toast from 'react-native-toast-message';
import { addNotification } from '../../redux/slices/notificationSlice';

const AddTodoScreen = ({navigation}:RootStackScreenProps<'AddTodo'>) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  const handleSaveTodo= () =>{
    dispatch(addTodo({ title, description }));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <InputComponent label="Title" value={title} onChangeText={setTitle} />
      <InputComponent
        label="Description"
        value={description}
        onChangeText={setDescription}
      />
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
