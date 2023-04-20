import React, { PropsWithChildren, useState } from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { HeadingTwo, Icon, Text } from '../common';
import { COLORS, SIZES } from '../../constants/theme';

type HeaderProps = {
  name: string;
  email: string;
  imageUrl?: string;
  isEditableHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 85,
    height: 85,
    borderRadius: 8,
  },
  optionMenuContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
    flexDirection: 'row-reverse',
  },
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
  nameText: {
    marginTop: 10,
    color: COLORS.netural,
    textAlign: 'center',
  },
  emailText: {
    textAlign: 'center',
    fontSize: SIZES.small,
    color: COLORS.neturalLight,
    lineHeight: 15,
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
      <Text style={[headerStyles.menuItem, danger && { color: '#FF3636' }]}>
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
    <View style={[headerStyles.optionMenu, hidden && { display: 'none' }]}>
      {children}
    </View>
  );
};

const Header = ({ name, email, isEditableHook }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditable, setIsEditable] = isEditableHook;
  const bgMale = '#12d9e3';
  const bgFemale = '#babffc';
  const gender = 'male';
  return (
    <View style={[headerStyles.container]}>
      <View style={headerStyles.content}>
        <View
          style={[
            headerStyles.profilePic,
            { backgroundColor: gender === 'male' ? bgMale : bgFemale },
          ]}
        >
          <Image
            style={[{ width: '100%', height: '100%' }]}
            source={require('../../../assets/images/men-profile-pic.png')}
          />
        </View>
        <View>
          <HeadingTwo bold style={headerStyles.nameText}>
            {name}
          </HeadingTwo>
          <Text style={headerStyles.emailText}>{email}</Text>
        </View>
      </View>
      <View style={headerStyles.optionMenuContainer}>
        <Pressable
          onPress={() => setIsMenuOpen(!isMenuOpen)}
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#eee' : '#fff' },
          ]}
        >
          <Icon name="more" fill={COLORS.neturalLight} />
        </Pressable>
        <OptionMenu hidden={!isMenuOpen}>
          <OptionMenuItem
            name={isEditable ? 'Cancle Editing' : 'Edit'}
            onPress={() => {
              setIsEditable(!isEditable);
              setIsMenuOpen(false);
              return;
            }}
          />
          <OptionMenuItem
            danger
            name="Logout"
            onPress={() => setIsMenuOpen(false)}
          />
        </OptionMenu>
      </View>
    </View>
  );
};

export { Header };
