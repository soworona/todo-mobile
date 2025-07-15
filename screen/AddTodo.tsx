import { Text, View } from "react-native";
import InputComponent from "../components/InputComponent";
import { useState } from "react";



const AddTodoScreen = () => {
    const [todoTitle, setTodoTile] = useState('');
    const [todoDescript, ]
    return(
        <View>
            <InputComponent label="Title"/>
        </View>
    )
}

export default AddTodoScreen;