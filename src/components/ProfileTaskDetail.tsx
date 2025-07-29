import MaterialIcons from '@react-native-vector-icons/material-icons';
import { StyleSheet, Text, View } from 'react-native';

type ProfileTaskDetailProps = {
  type: 'all' | 'active' | 'completed';
};

const ProfileTaskDetail = (props: ProfileTaskDetailProps) => {
  if (props.type === 'all') {
    return (
      <View style={[styles.container, { backgroundColor: '#fdf6ec' }]}>
        <MaterialIcons name="auto-awesome" color={'#8d8477ff'} size={20} />
        <Text style={styles.txt}>
          You have
          <Text style={[styles.highlight, { color: '#857866ff' }]}> 100 </Text>
          total tasks.
        </Text>
      </View>
    );
  } else if (props.type === 'active') {
    return (
      <View style={[styles.container, { backgroundColor: '#f5e8b7' }]}>
        <MaterialIcons name="goat" color={'#8d8566ff'} size={20} />
        <Text style={styles.txt}>
          And
          <Text style={[styles.highlight, { color: '#6e6954ff' }]}> 100 </Text>
          active tasks.
        </Text>
      </View>
    );
  } else {
    return (
      <View style={[styles.container, { backgroundColor: '#d6eadf' }]}>
        <MaterialIcons name="local-florist" color={'#7e9a86'} size={20} />
        <Text style={styles.txt}>
          And
          <Text style={[styles.highlight, { color: '#67816eff' }]}> 100 </Text>
          completed tasks.
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 29,
    flexDirection: 'row',
    borderRadius: 14,
  },
  highlight: {
    fontWeight: 700,
    fontSize: 15,
  },
  txt: {
    fontSize: 16,
    marginLeft: 20,
    color: '#333333',
  },
});

export default ProfileTaskDetail;
