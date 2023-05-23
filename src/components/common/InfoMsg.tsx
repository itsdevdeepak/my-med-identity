import React from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import { Text } from './Headings';
import { COLORS } from '../../constants/theme';

const infoMsgStyles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  text: {
    color: '#fff',
  },
});

const InfoMsg = ({
  msg,
  backgroundColor,
}: {
  msg: string;
  backgroundColor?: ColorValue;
}) => {
  return (
    <View
      style={[
        infoMsgStyles.container,
        { backgroundColor: backgroundColor || COLORS.primary },
      ]}
    >
      <Text style={infoMsgStyles.text}>{msg}</Text>
    </View>
  );
};

export { InfoMsg };
