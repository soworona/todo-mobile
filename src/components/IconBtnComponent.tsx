import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import { useTheme } from '@react-navigation/native';

type IconButtonProps = {
  icon: string;
  label?: string;
  onPress?: () => void;
};

const IconMap: Record<string, any> = {
  home: 'house',
  profile: 'face',
};

const IconBtnComponent = (props: IconButtonProps) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Icon name={IconMap[props.icon]} size={25} color='#638265ff' />
      <Text style={{ color: '#638265ff', fontSize: 12 }}> {props.label} </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 2,
  },
});

export default IconBtnComponent;
