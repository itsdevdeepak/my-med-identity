import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { HeadingThree } from '../common';
import { COLORS, SHADOWS } from '../../constants/theme';
import { useUser } from '../../utils/hooks';
import { Gender } from '../../features/auth/authSlice';

const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  heading: {
    color: COLORS.netural,
    lineHeight: 25,
  },
  tagLine: {
    color: COLORS.neturalLight,
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: '#fff',
    elevation: 40,
  },
});

const Header = () => {
  const bgMale = '#12d9e3';
  const bgFemale = '#babffc';
  const user = useUser();

  return (
    <View style={[headerStyles.container, SHADOWS.small]}>
      <View>
        <HeadingThree bold style={headerStyles.heading}>
          Hello, {user.name}
        </HeadingThree>
        <Text style={headerStyles.tagLine}>Welcome back!</Text>
      </View>
      <View>
        <Pressable
          style={({ pressed }) => [
            headerStyles.profile,
            { opacity: pressed ? 0.8 : 1 },
          ]}
        >
          <Image
            style={[
              { height: '100%', width: '100%' },
              {
                backgroundColor: user.gender
                  ? user.gender === Gender.MALE
                    ? bgMale
                    : bgFemale
                  : Gender.MALE,
              },
            ]}
            source={require('../../../assets/images/men-profile-pic.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

export { Header };
