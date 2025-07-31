import { View } from 'react-native';
import InputComponent from '../../components/InputComponent';
import { useState } from 'react';
import BtnComponent from '../../components/BtnComponent';
import { RootStackScreenProps } from '../../navigation/types';
import { nanoid } from '@reduxjs/toolkit';
import { addToFirestore } from '../../utils/TodoFirestore';

const EditUserScreen = ({ navigation }: RootStackScreenProps<'EditUser'>) => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  // const dispatch = useAppDispatch();

  const handleSaveTodo = () => {

  };

  return (
    <View style={styles.container}>
      <InputComponent label="Username" value={username} onChangeText={setUsername} />
      <InputComponent
        label="Bio"
        value={bio}
        onChangeText={setBio}
        
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
export default EditUserScreen;
