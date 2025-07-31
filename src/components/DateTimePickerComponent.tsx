import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { View } from 'react-native';

const DateTimePickerComponent = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  return (
    <View>
      <DateTimePicker
      display='spinner'
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={() => {setDate(date)}}
        />
    </View>
  )
}

export default DateTimePickerComponent;