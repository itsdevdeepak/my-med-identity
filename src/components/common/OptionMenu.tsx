import React, { PropsWithChildren } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { Text } from '../common';
import { COLORS, SIZES } from '../../constants/theme';

const optionMenuStyles = StyleSheet.create({
  optionMenu: {
    marginTop: 10,
    minWidth: 70,
  },

  menuItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
    color: COLORS.neturalDark,
  },
});

const OptionMenuItem = ({
  name,
  onPress,
  danger,
}: {
  name: string;
  onPress: (event: GestureResponderEvent) => void;
  danger?: boolean;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#eee' : '#fff',
        },
      ]}
    >
      <Text style={[optionMenuStyles.menuItem, danger && { color: '#FF3636' }]}>
        {name}
      </Text>
    </Pressable>
  );
};

const OptionMenu = ({
  children,
  hidden,
}: PropsWithChildren<{ hidden?: boolean }>) => {
  return (
    <View style={[optionMenuStyles.optionMenu, hidden && { display: 'none' }]}>
      {children}
    </View>
  );
};

OptionMenu.Item = OptionMenuItem;

export { OptionMenu, OptionMenuItem };
