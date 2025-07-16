import { Text } from '@react-navigation/elements';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/material-icons';
import { Task } from '../screens/HomeScreen';

type TaskCardComponentProps = {
  key: number;
  task: Task;
  onPress: () => void
};

const TaskCardComponent = (props: TaskCardComponentProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.smallTxt}>{props.task.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical:15,
    paddingHorizontal:20,
    borderRadius: 5,
    alignContent: 'center',
    marginBottom: 10,
    borderColor:' #99d29cff',
    backgroundColor: '#d6e6cdff'
  },
  smallTxt: {
    fontSize: 18,
    fontWeight: 400,
  },
});

export default TaskCardComponent;
