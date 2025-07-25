import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type BtnComponentProps = {
  label: string;
  onPress: () => void;
};

const BtnComponent = ({ label, onPress }: BtnComponentProps) => {
  const isSecondary = !['Cancel', 'Sign up here'].includes(label);

  return (
    <TouchableOpacity
      style={[
        styles.backgroundStyle,
        { backgroundColor: isSecondary ? '#7fa381ff' : '#bfc6c0ff' },
      ]}
      onPress={onPress}
    >
      <Text style={styles.txt}>{label}</Text>
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
    fontWeight: '600', // string is safer in RN
    fontSize: 16,
  },
});

export default BtnComponent;
