import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
  
type CheckBoxComponentProps = {
  onPress: () => void;
  isChecked: boolean
};

const CheckBoxComponent = (props : CheckBoxComponentProps) => {
    const {isChecked, onPress} = props;

  return (
    <TouchableOpacity style={styles.container} onPress = {onPress}>
    {isChecked && <Icon name='check' size={22} color="#638265ff" />}
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 25,
    borderColor:'#B2BAB2',
    borderWidth:1,
    borderRadius:5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CheckBoxComponent;
