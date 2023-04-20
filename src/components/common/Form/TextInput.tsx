import React from 'react';
import {
  View,
  TextInput as NativeTextInput,
  StyleSheet,
  type StyleProp,
  type TextStyle,
} from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';

type TextInputType = 'password' | 'number' | 'text';

type TextInputProps = {
  type?: TextInputType;
  placeholder?: string;
  value?: string;
  style?: StyleProp<TextStyle>;
  disable?: boolean;
};

const textInputStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: COLORS.primary,
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: COLORS.neturalDark,
    fontSize: SIZES.medium,
  },
});

const TextInput = ({
  type = 'text',
  placeholder,
  style,
  value,
  disable,
}: TextInputProps) => {
  return (
    <View style={textInputStyles.container}>
      <NativeTextInput
        placeholderTextColor={COLORS.neturalLight}
        style={[textInputStyles.input, style && style]}
        placeholder={placeholder ?? ''}
        secureTextEntry={type === 'password'}
        keyboardType={type !== 'number' ? 'default' : 'numeric'}
        value={value}
        cursorColor={COLORS.neturalLight}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export { TextInput, TextInputProps };
