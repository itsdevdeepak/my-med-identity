import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { HeadingTwo, Icon, Text } from '../common';
import { COLORS, SIZES } from '../../constants/theme';
import { OptionMenu } from '../common/OptionMenu';
import { useAppDispatch, useUser } from '../../utils/hooks';
import { logOut } from '../../features/auth/authSlice';

type HeaderProps = {
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

const Header = ({ isEditableHook }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditable, setIsEditable] = isEditableHook;
  const dispatch = useAppDispatch();
  const user = useUser();
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
            {user.name}
          </HeadingTwo>
          <Text style={headerStyles.emailText}>{user.email}</Text>
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
          <OptionMenu.Item
            name={isEditable ? 'Cancle Editing' : 'Edit'}
            onPress={() => {
              setIsEditable(!isEditable);
              setIsMenuOpen(false);
              return;
            }}
          />
          <OptionMenu.Item
            danger
            name="Logout"
            onPress={() => {
              setIsMenuOpen(false);
              dispatch(logOut());
            }}
          />
        </OptionMenu>
      </View>
    </View>
  );
};

export { Header };
