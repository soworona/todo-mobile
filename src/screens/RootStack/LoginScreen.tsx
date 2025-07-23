import { Text, View } from "react-native"
import InputComponent from "../../components/InputComponent";
import { useState } from "react";
import BtnComponent from "../../components/BtnComponent";
import { RootStackScreenProps } from "../../navigation/types";

const LoginScreen = ({navigation}: RootStackScreenProps<'Login'>) => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View>
            <InputComponent label="Email" value={email} onChangeText={setEmail}/>
            <InputComponent label="Password" value={password} onChangeText={setPassword} />
            <BtnComponent label="Login" onPress={() =>{
                navigation.navigate('Todo');
            }} />
            <BtnComponent label="Sign up here" onPress={() => {
                navigation.navigate('Signup')
            }} />
        </View>
    )
}

export default LoginScreen;