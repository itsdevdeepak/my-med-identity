import React from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../constants/theme';
import { Text } from './Headings';

type TagProps = React.PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  textColor?: ColorValue;
}>;

const TagStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    minWidth: 60,
    margin: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: SIZES.small,
  },
});

const Tag = ({
  style,
  textColor = COLORS.neturalLight,
  children,
}: TagProps) => {
  return (
    <View style={[TagStyles.container, SHADOWS.medium, style]}>
      <Text style={[TagStyles.text, { color: textColor }]}>{children}</Text>
    </View>
  );
};

export { Tag };
