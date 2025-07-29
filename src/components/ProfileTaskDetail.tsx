import MaterialIcons from '@react-native-vector-icons/material-icons';
import { StyleSheet, Text, View } from 'react-native';

type ProfileTaskDetailProps= {
  type: 'all' | 'active' | 'completed';
}

const ProfileTaskDetail = (props: ProfileTaskDetailProps) => {
    if(props.type === "all"){
        return (
            <View style={[styles.container, {backgroundColor: '#9794ca36'}]}>
      <MaterialIcons name="auto-awesome" color={'black'} size={20} />
      <Text style={{fontSize:18, marginLeft: 20}}> 
        You have 
        <Text style={{ fontWeight: 700, fontSize: 18,}}> 100 </Text> 
        total tasks</Text>
    </View>
  );
}else if( props.type === "active"){
    return (
            <View style={[styles.container, {backgroundColor: '#cc353536'}]}>
      <MaterialIcons name="goat" color={'black'} size={20} />
      <Text style={{fontSize:18, marginLeft: 20}}> 
        And
        <Text style={{ fontWeight: 700, fontSize: 18,}}> 100 </Text> 
        active tasks</Text>
    </View>
  );
} else {
    return (
            <View style={[styles.container, {backgroundColor: '#599e3936'}]}>
      <MaterialIcons name="local-florist" color={'black'} size={20} />
      <Text style={{fontSize:18, marginLeft: 20}}> 
        And 
        <Text style={{ fontWeight: 700, fontSize: 18,}}> 100 </Text> 
        completed tasks</Text>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    paddingVertical:20,
    paddingHorizontal: 29,
    flexDirection: 'row',
    borderRadius:14
  },
});

export default ProfileTaskDetail;
