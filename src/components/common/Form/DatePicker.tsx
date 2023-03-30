import React, { useState } from 'react';
import DateTimePicker, {
  type DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { StyleSheet, View } from 'react-native';
import { COLORS, SHADOWS } from '../../../constants/theme';
import { Text } from '../Headings';
import { Button } from '../Buttons';
// type DatePickerProps = {};

const datePickerStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.netural,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: COLORS.neturalDark,
  },
  button: {
    width: '30%',
  },
});

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (
    _event: DateTimePickerEvent,
    selectedDate: Date = new Date()
  ) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  return (
    <View style={[datePickerStyles.container, SHADOWS.small]}>
      <Text style={datePickerStyles.text}>{date.toLocaleDateString()}</Text>
      {show && (
        <DateTimePicker
          testID="datePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <Button onPress={() => setShow(true)} style={datePickerStyles.button}>
        Pick Date
      </Button>
    </View>
  );
};

export { DatePicker };
