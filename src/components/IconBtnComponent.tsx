import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import { useTheme } from '@react-navigation/native';

type IconButtonProps = {
  icon: string;
  onPress: () => void;
};

const IconMap: Record<string, any> = {
  home: 'delete-outline',
  profile: 'face',
};

const IconBtnComponent = (props: IconButtonProps) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Icon name={IconMap[props.icon]} size={24} color='#638265ff' />
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
