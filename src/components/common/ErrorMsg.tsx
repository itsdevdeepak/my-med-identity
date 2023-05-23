import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from './Headings';
import { COLORS } from '../../constants/theme';

const errorMsgStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.red,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  errorText: {
    color: '#fff',
  },
});

const ErrorMsg = ({ msg }: { msg: string }) => {
  return (
    <View style={errorMsgStyles.container}>
      <Text style={errorMsgStyles.errorText}>{`Error ${msg}`}</Text>
    </View>
  );
};

export { ErrorMsg };
