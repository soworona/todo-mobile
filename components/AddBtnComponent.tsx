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
    backgroundColor: '#0098FF',
    borderRadius: 10,
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left:170,
    bottom: 50,
  },
});

export default AddBtnComponent;
