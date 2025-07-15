import { Text } from '@react-navigation/elements';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/material-icons';
import { Task } from '../screen/HomeScreen';

type TaskCardComponentProps = {
  key: number;
  task: Task;
};

const TaskCardComponent = (props: TaskCardComponentProps) => {
  console.log(props.task)
  return (
    <View  
    style={styles.container}
    >
          <Text
            style={
              styles.smallTxt}
          >
            {props.task.title}
          </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingTop: 18,
    paddingHorizontal: 20,
    height: 60,
    borderRadius: 5,
    alignContent: 'center',
    marginBottom: 10,
  },
  smallTxt: {
    top: -3,
    fontSize: 18,
    fontWeight: 400,
  }
});

export default TaskCardComponent;
