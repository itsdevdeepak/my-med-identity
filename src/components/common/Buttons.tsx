import React from 'react';
import {
  TouchableHighlight as NativeButton,
  View,
  StyleSheet,
  type GestureResponderEvent,
  ViewStyle,
  ColorValue,
  StyleProp,
} from 'react-native';
import { COLORS, SHADOWS } from '../../constants/theme';
import { HeadingThree, HeadingTwo } from './Headings';
import { Icon, type IconName } from './Icon';

type ButtonProps = {
  icon?: IconName;
  large?: boolean;
  style?: StyleProp<ViewStyle>;
  textColor?: ColorValue;
  underlayColor?: ColorValue;
  onPress?: (event: GestureResponderEvent) => void;
};

type ButtonPropsWithChildren = React.PropsWithChildren<ButtonProps>;

const ButtonStyles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 120,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    lineHeight: 20,
  },
  textLarge: {
    color: '#fff',
    lineHeight: 30,
    // backgroundColor: 'red',
  },
  content: {
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  contentWithIcon: {
    padding: 7,
    paddingHorizontal: 15,
  },
});

const Button = ({
  icon,
  large,
  children,
  style,
  textColor = 'white',
  underlayColor = '#115d80',
  onPress,
}: ButtonPropsWithChildren) => {
  return (
    <NativeButton
      underlayColor={underlayColor}
      onPress={onPress}
      style={[ButtonStyles.container, SHADOWS.medium, style]}
    >
      <View
        style={[ButtonStyles.content, icon && ButtonStyles.contentWithIcon]}
      >
        {large ? (
          <>
            {icon && <Icon name={icon} width={40} height={40} />}
            <HeadingTwo
              bold
              style={[ButtonStyles.textLarge, { color: textColor }]}
            >
              {children}
            </HeadingTwo>
          </>
        ) : (
          <>
            {icon && <Icon name={icon} />}
            <HeadingThree
              bold
              style={[ButtonStyles.text, { color: textColor }]}
            >
              {children}
            </HeadingThree>
          </>
        )}
      </View>
    </NativeButton>
  );
};

const PrimaryButton = (props: ButtonPropsWithChildren) => {
  return (
    <Button {...props} style={{ backgroundColor: COLORS.tertiary }}>
      {props.children}
    </Button>
  );
};

export { Button, PrimaryButton };
