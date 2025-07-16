import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

type InputTextProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};
const InputComponent = (props: InputTextProps) => {

  const colors= useTheme().colors
  return (
    <View>
      {props.label && (
        <Text style={[styles.baseText, {color: colors.text}]}>{props.label}</Text>
      )}
      <TextInput 
      style={[styles.input, {color: colors.text, backgroundColor: colors.card, borderColor:colors.border}]} 
      value={props.value}
      onChangeText={props.onChangeText} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderRadius: 20,
    padding: 10,
    color: 'black',
    marginBottom:5,
    borderWidth:2,
  },
  baseText: {
    padding: 5,
    fontSize: 14,
    fontWeight:400
  },
});

export default InputComponent;
