import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type BtnComponentProps = {
  label: string;
  onPress: () => void;
};

const BtnComponent = (props: BtnComponentProps) => {
  return props.label === 'Save' ? (
    <TouchableOpacity
      style={[styles.backgroundStyle, { backgroundColor: '#7fa381ff' }]}
      onPress={props.onPress}
    >
      <Text style={styles.txt}>{props.label}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.backgroundStyle, { backgroundColor: '#bfc6c0ff' }]}
      onPress={props.onPress}
    >
      <Text style={styles.txt}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    width: '100%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 5,
  },
  txt: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 16,
  },
});

export default BtnComponent;
