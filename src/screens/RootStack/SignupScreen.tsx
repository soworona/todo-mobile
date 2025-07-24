import { StyleSheet, Text, View } from 'react-native';
import InputComponent from '../../components/InputComponent';
import BtnComponent from '../../components/BtnComponent';
import { useEffect, useState } from 'react';
import { RootStackScreenProps } from '../../navigation/types';
import {
  createUserWithEmailAndPassword,
  getAuth,
} from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

type Error = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const SignupScreen = ({ navigation }: RootStackScreenProps<'Signup'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Error>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handleValidation = () => {
    let errors: Error = {};

    if (!email) {
      errors.email = 'Field cannot be empty';
    }

    if (!password) {
      errors.password = 'Field cannot be empty';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Field cannot be empty';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleRegisterUser = () => {
    if (isFormValid) {
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
    }
  };
  return (
    <View style={styles.container}>
      <InputComponent
        label="Email"
        value={email}
        onChangeText={setEmail}
        onBlur={() => {
          setEmailTouched(true);
          handleValidation();
        }}
      />

      {emailTouched && errors.email ? <Text style={styles.error}> {errors.email}</Text> : null}

      <InputComponent
        label="Password"
        value={password}
        onChangeText={setPassword}
        onBlur={() => {
          setPasswordTouched(true);
          handleValidation();
        }}
        secureTextEntry
      />

      {passwordTouched && errors.password? <Text style={styles.error}> {errors.password}</Text> : null}

      <InputComponent
        label="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        onBlur={() => {
          setConfirmPasswordTouched(true);
          handleValidation();
        }}
        secureTextEntry
      />

      {confirmPasswordTouched && errors.confirmPassword? <Text style={styles.error}> {errors.confirmPassword}</Text> : null}

      <BtnComponent label="Sign In" onPress={handleRegisterUser} />
      <BtnComponent label="Cancel" onPress={() => {navigation.goBack()}} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap:6
  },
  error:{
    color:'#f38273ff',
    fontSize:12,
    padding:0,
    fontStyle:'italic'
  }
});

export default SignupScreen;
