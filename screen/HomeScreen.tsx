import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddBtnComponent from '../components/AddBtnComponent';
import IconBtnComponent from '../components/IconBtnComponent';
import { useNavigation } from '@react-navigation/native';

export type Task = {
  title: string;
  isComplete: boolean;
};

const Todo = () => {
  const navigation = useNavigation();

    return (
    <SafeAreaView style={styles.screen}>
      {/* Main container starts */}
      <ScrollView style={styles.container}></ScrollView>

      {/* Main container ends */}

      <View
        style={[
          styles.navbar,
          {
            borderColor: 'gray',
            borderTopWidth: 1,
          },
        ]}
      >
        <IconBtnComponent label="Home" icon="home" onPress={() => {}} />
        <AddBtnComponent onPress={() => {
          navigation.navigate('AddTodo');}}/>
        <IconBtnComponent label="Profile" icon="profile" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  container: {
    zIndex: 0,
    flexGrow: 1,
    width: '100%',
    paddingHorizontal: 20,
    overflow: 'scroll',
  },
  baseTxt: {
    fontSize: 24,
    fontWeight: 800,
    textAlign: 'center',
  },
});

export default Todo;
