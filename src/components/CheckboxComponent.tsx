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
    {isChecked && <Icon name='check' size={24} color="#000" />}
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CheckBoxComponent;
