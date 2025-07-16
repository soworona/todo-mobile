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
  avatar: {
    height: 45,
    width: 45,
  },
  icon: {
    backgroundColor: '#7dac80ff',
    borderRadius:20,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left:165,
    bottom: 45,
  },
});

export default AddBtnComponent;
