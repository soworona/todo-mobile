import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';

type IconButtonProps = {
  icon: string;
  onPress: () => void;
};

const IconMap: Record<string, any> = {
  home: 'delete-outline',
  profile: 'face',
  edit: 'edit-note'
};

const IconBtnComponent = (props: IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Icon name={IconMap[props.icon]} size={24} color={props.icon === "edit"? 'white' : '#638265ff'} />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    zIndex:10,
    padding:5,
  },
});

export default IconBtnComponent;
