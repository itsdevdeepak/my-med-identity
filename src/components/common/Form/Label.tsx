import React from 'react';
import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { HeadingThree } from '../index';

type LabelProps = React.PropsWithChildren<{
  style?: StyleProp<TextStyle>;
}>;

const labelStyles = StyleSheet.create({
  label: {
    width: '100%',
    color: COLORS.secondary,
  },
});

const Label = ({ style, children }: LabelProps) => {
  return (
    <HeadingThree bold style={[labelStyles.label, style]}>
      {children}
    </HeadingThree>
  );
};

export { Label, LabelProps };
