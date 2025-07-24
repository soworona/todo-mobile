import { View } from "react-native"
import InputComponent from "../../components/InputComponent";
import BtnComponent from "../../components/BtnComponent";
import { useState } from "react";
import { RootStackScreenProps } from "../../navigation/types";
import { createUserWithEmailAndPassword, getAuth } from '@react-native-firebase/auth';
import Toast from "react-native-toast-message";

const SignupScreen = ({navigation}: RootStackScreenProps<'Signup'>) => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterUser = () =>{
            getAuth().createUserWithEmailAndPassword(email, password)
            // createUserWithEmailAndPassword(getAuth(),email,password)
            // createUserWithEmailAndPassword(getAuth(), email, password)
        .then(() => {
            Toast.show({
                type:'success',
                text1:"Yayy!",
                text2:"User account created & signed in!"
            })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                Toast.show({
                type:'error',
                text1:"Oh no!",
                text2:"That email address is already in use!"
            })
            }
            
            if (error.code === 'auth/invalid-email') {
                Toast.show({
                type:'error',
                text1:"Oh no!",
                text2:"That email address is invalid!"
            })
            }
        })  
      
    } 
    return(
        <View>
            <InputComponent label="Email" value={email} onChangeText={setEmail}/>
            <InputComponent label="Password" value={password} onChangeText={setPassword} />
            <BtnComponent label="Save" onPress={handleRegisterUser} />
        </View>
    )
}


export default SignupScreen;