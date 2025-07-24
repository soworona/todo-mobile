import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import InputComponent from '../../components/InputComponent';
import BtnComponent from '../../components/BtnComponent';
import { useState } from 'react';
import { RootStackScreenProps } from '../../navigation/types';
import {
  createUserWithEmailAndPassword,
  getAuth,
} from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

const SignupScreen = ({ navigation }: RootStackScreenProps<'Signup'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterUser = () => {
    const validationError = handleValidation();
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'Yayy!',
          text2: 'User account created & signed in!',
        });
      })
      .catch(error => {
        let message = 'Something went wrong';

        if (error.code === 'auth/email-already-in-use') {
          message = 'That email is already in use!';
        } else if (error.code === 'auth/invalid-email') {
          message = 'That email is invalid!';
        } else if (error.code === 'auth/weak-password') {
          message = 'Password should be at least 6 characters.';
        }

        Toast.show({
          type: 'error',
          text1: 'Try again!',
          text2: message,
        });
      });
  };

  const handleValidation = () => {
    if(password !== confirmPassword){
        return "Passwords do not match"
    }

    if(!email || !password || !confirmPassword){
        return "Fields cannot be empty"
    }
  } 
  return (
    <View style={styles.container}>

      <InputComponent label="Email" value={email} onChangeText={setEmail} />
      <InputComponent
        label="Password"
        value={password}
        onChangeText={setPassword}
        />
      <InputComponent
        label="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        />
      <BtnComponent label="Save" onPress={handleRegisterUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },
});

export default SignupScreen;
