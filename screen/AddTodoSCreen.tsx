import { Text, View } from 'react-native';
import InputComponent from '../components/InputComponent';
import { useState } from 'react';
import BtnComponent from '../components/BtnComponent';
import { useNavigation } from '@react-navigation/native';

const AddTodoScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  const handleSaveTodo= (title: string, description: string) =>{
    const newTodo = { title:title, description: description, isComplete: false};
  }

  return (
    <View style={styles.container}>
      <InputComponent label="Title" value={title} onChangeText={setTitle} />
      <InputComponent
        label="Description"
        value={description}
        onChangeText={setDescription}
      />
      <BtnComponent label="Save" onPress={() =>{handleSaveTodo(title, description)}} />
      <BtnComponent
        label="Cancel"
        onPress={() => {
          navigation.navigate('Home');
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
