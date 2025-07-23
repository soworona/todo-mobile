import { View } from "react-native"
import InputComponent from "../../components/InputComponent";
import BtnComponent from "../../components/BtnComponent";
import { useState } from "react";
import { RootStackScreenProps } from "../../navigation/types";

const SignupScreen = ({navigation}: RootStackScreenProps<'Signup'>) => {
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View>
            <InputComponent label="Email" value={email} onChangeText={setEmail}/>
            <InputComponent label="Password" value={password} onChangeText={setPassword} />
            <BtnComponent label="Save" onPress={() =>{
                navigation.navigate('Login');
            }} />
        </View>
    )
}


export default SignupScreen;