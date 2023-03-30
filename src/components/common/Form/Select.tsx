import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker, type PickerProps } from '@react-native-picker/picker';
import { COLORS } from '../../../constants/theme';

type SelectProps = React.PropsWithChildren<PickerProps>;

type OptionProps = {
  label: string;
  value: string;
};

const selectStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    width: '100%',
    borderRadius: 8,
  },
  picker: {
    color: COLORS.neturalDark,
  },
});

const Option = ({ label, value }: OptionProps) => {
  return <Picker.Item label={label} value={value} />;
};

const Select = (props: SelectProps) => {
  return (
    <View style={selectStyles.container}>
      <Picker {...props} style={selectStyles.picker}>
        {props.children}
      </Picker>
    </View>
  );
};

Select.Option = Option;

export { Select, SelectProps };
