import { Text, View } from 'react-native';
import InputComponent from '../components/InputComponent';
import { useState } from 'react';
import BtnComponent from '../components/BtnComponent';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Task } from './HomeScreen';
import { useAppDispatch } from '../redux/hook';
import { addTodo } from '../redux/slices/todoSlice';

type RootStackParamList = {
  Home: { newTodo?: Task };
  AddTodo: undefined;
};

type AddTodoScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddTodo'
>;

const AddTodoScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();
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
