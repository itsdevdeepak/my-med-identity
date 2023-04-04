import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as NativeText,
  TextStyle,
} from 'react-native';
import { FONT, SIZES } from '../../constants/theme';

const TextStyles = StyleSheet.create({
  text: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
  },
  bold: {
    fontFamily: FONT.bold,
  },
  headingLarge: {
    fontSize: SIZES.xxLarge,
  },
  headingMedium: {
    fontSize: SIZES.xLarge,
  },
  headingSmall: {
    fontSize: SIZES.large,
  },
});

type TextProps = {
  style?: StyleProp<TextStyle>;
  bold?: boolean;
  numberOfLines?: number;
};

type TextPropsWithChildren = React.PropsWithChildren<TextProps>;

const Text = (props: TextPropsWithChildren) => {
  return (
    <NativeText
      numberOfLines={props.numberOfLines}
      style={[TextStyles.text, props.bold && TextStyles.bold, props.style]}
    >
      {props.children}
    </NativeText>
  );
};

const HeadingOne = (props: TextPropsWithChildren) => {
  return (
    <Text bold={props.bold} style={[TextStyles.headingLarge, props.style]}>
      {props.children}
    </Text>
  );
};

const HeadingTwo = (props: TextPropsWithChildren) => {
  return (
    <Text bold={props.bold} style={[TextStyles.headingMedium, props.style]}>
      {props.children}
    </Text>
  );
};

const HeadingThree = (props: TextPropsWithChildren) => {
  return (
    <Text bold={props.bold} style={[TextStyles.headingSmall, props.style]}>
      {props.children}
    </Text>
  );
};

export { Text, HeadingOne, HeadingTwo, HeadingThree };
