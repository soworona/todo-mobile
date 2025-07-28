import { StyleSheet, Text, View } from 'react-native';
import InputComponent from '../../../components/InputComponent';
import BtnComponent from '../../../components/BtnComponent';
import { useEffect, useState } from 'react';
import {
  HomeTabScreenProps,
  RootStackScreenProps,
} from '../../../navigation/types';
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import Divider from '../../../components/Divider';
import LoginOptionBtn from '../../../components/LoginOptionBtn ';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

type Error = {
  email?: string;
  password?: string;
};

const LoginScreen = ({ navigation }: RootStackScreenProps<'Todo'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Error>({});
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateForm = () => {
    let errors: Error = {};

    if (!email) {
      errors.email = 'Field cannot be empty';
    }

    if (!password) {
      errors.password = 'Field cannot be empty';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
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

          navigation.navigate('Todo');
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

  const webClientId =
    '562491099262-ds6g15tlutuem3ssr09808fh1hamn76t.apps.googleusercontent.com';

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: webClientId,
    });
  }, []);

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const userInfo = await GoogleSignin.signIn();
    console.log('userinfo', userInfo);
    navigation.navigate('Todo');
    let idToken = userInfo.data?.idToken; 
    if (!idToken) {
      throw new Error('No ID token found');
    }
    const googleCredential = GoogleAuthProvider.credential(
      userInfo.data?.idToken,
    );

    return signInWithCredential(getAuth(), googleCredential);
  };

  return (
    <View style={styles.container}>
      <View>
        <InputComponent
          label="Email"
          value={email}
          onChangeText={setEmail}
          onBlur={() => setEmailTouched(true)}
          errorMessage={errors.email ? errors.email : undefined}
        />

        <InputComponent
          label="Password"
          value={password}
          onChangeText={setPassword}
          onBlur={() => setPasswordTouched(true)}
          secureTextEntry
          errorMessage={errors.password ? errors.password : undefined}
        />

        <BtnComponent label="Login" onPress={handleLogin} />

        <BtnComponent
          label="Sign up here"
          onPress={() => {
          navigation.navigate('Signup')
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Divider /> 
         <Divider />
      </View>
      <View>
        <LoginOptionBtn
          label="Sign in with Google"
          onClick={onGoogleButtonPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
});

export default LoginScreen;
