import { StyleSheet, View } from 'react-native';
import InputComponent from '../../components/InputComponent';
import BtnComponent from '../../components/BtnComponent';
import { useState } from 'react';
import { RootStackScreenProps } from '../../navigation/types';
import { signInWithEmailAndPassword, getAuth } from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

type Error = {
  email?: string;
  password?: string;
};

const LoginScreen = ({ navigation }: RootStackScreenProps<'Login'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Error>({});
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateForm = () => {
    let newErrors: Error = {};

    if (!email) {
      newErrors.email = 'Field cannot be empty';
    }

    if (!password) {
      newErrors.password = 'Field cannot be empty';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      signInWithEmailAndPassword(getAuth(), email, password)
        .then(() => {
          Toast.show({
            type: 'success',
            text1: 'Welcome back!',
            text2: 'Successfully signed in.',
          });
        })
        .catch(error => {
          let message = 'Something went wrong';

          if (error.code === 'auth/invalid-email') {
            message = 'That email is invalid!';
          } else if (error.code === 'auth/user-not-found') {
            message = 'No account found with this email';
          } else if (error.code === 'auth/wrong-password') {
            message = 'Incorrect password';
          }

          Toast.show({
            type: 'error',
            text1: 'Login failed',
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
        onBlur={() => setEmailTouched(true)}
        errorMessage={emailTouched ? errors.email : undefined}
      />

      <InputComponent
        label="Password"
        value={password}
        onChangeText={setPassword}
        onBlur={() => setPasswordTouched(true)}
        secureTextEntry
        errorMessage={passwordTouched ? errors.password : undefined}
      />

      <BtnComponent label="Login" onPress={handleLogin} />

      <BtnComponent
        label="Sign up here"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default LoginScreen;
