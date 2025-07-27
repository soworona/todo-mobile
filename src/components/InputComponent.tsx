import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';

type InputTextProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean
  onBlur?: () => void
  errorMessage?: string
};
const InputComponent = (props: InputTextProps) => {

  const colors= useTheme().colors
  return (
    <View>
      {props.label && (
        <Text style={[styles.baseText, {color: colors.text}]}>{props.label}</Text>
      )}
      <TextInput 
      style={[styles.input, { borderColor: props.errorMessage? '#f38273ff' : '#dad2d1ff'}]} 
      value={props.value}
      onChangeText={props.onChangeText} 
      secureTextEntry={props.secureTextEntry}
      onBlur={props.onBlur}/>
      <Text style={styles.error}>{props.errorMessage}</Text>
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
    borderWidth:1,
    backgroundColor:'white'
  },
  baseText: {
    padding: 5,
    fontSize: 14,
    fontWeight:400
  },
    error: {
    marginLeft: 10,
    color: '#f38273ff',
    fontSize: 12,
    padding: 0,
    fontStyle: 'italic',
  },
});

export default InputComponent;




