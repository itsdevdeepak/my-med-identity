import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../constants/theme';
import { Text } from './Headings';

type OptionProps = React.PropsWithChildren<{
  toggle?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}>;

const OptionStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    minWidth: 60,
  },
  activeContainer: {
    backgroundColor: COLORS.tertiary,
    borderColor: COLORS.tertiary,
  },
  activeText: {
    color: '#FFF',
  },
  text: {
    textAlign: 'center',
    fontSize: SIZES.small,
    color: COLORS.neturalLight,
  },
});

const Option = ({ onPress, children, toggle = false }: OptionProps) => {
  return (
    <TouchableHighlight
      underlayColor={toggle ? '#1595b9' : '#eeeeee'}
      onPress={onPress}
      style={[
        OptionStyles.container,
        SHADOWS.medium,
        toggle && OptionStyles.activeContainer,
      ]}
    >
      <View>
        <Text style={[OptionStyles.text, toggle && OptionStyles.activeText]}>
          {children}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export { Option };
