import { useTheme } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

type AddBtnComponentProps = {
  onPress: () => void;
};

const AddBtnComponent = (props: AddBtnComponentProps) => {
  const colors = useTheme().colors;
  return (    
    <TouchableHighlight style={styles.icon} onPress={props.onPress}>
      <Text 
      style={{
        color:'white',
        fontSize:40,
        fontWeight:300

      }}>+</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: '#7dac80ff',
    borderRadius:15,
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right:20,
    bottom: 25,
  },
});

export default AddBtnComponent;
