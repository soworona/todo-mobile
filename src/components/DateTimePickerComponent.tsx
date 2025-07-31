import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

type DateTimePickerComponentProps = {
  date: Date;
  onChange: (date: Date) => void;
};

const DateTimePickerComponent= (props: DateTimePickerComponentProps) => {

  return <DatePicker date={props.date} onDateChange={props.onChange} theme='light'/>
}

export default DateTimePickerComponent;