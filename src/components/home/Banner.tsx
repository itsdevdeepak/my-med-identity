import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../constants/theme';
import { HeadingThree, Text } from '../common';

const bannerStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: COLORS.tertiary,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  heading: {
    color: '#fff',
    lineHeight: 30,
    marginBottom: 5,
  },
  text: {
    color: '#fff',
    lineHeight: 20,
    fontSize: SIZES.small,
    letterSpacing: 0.3,
  },
  image: {
    width: 'auto',
    height: 130,
  },
  button: {
    borderWidth: 1.6,
    borderRadius: 8,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    padding: 7,
    borderColor: '#fff',
  },
});

const Banner = () => {
  return (
    <View style={[bannerStyles.container, SHADOWS.medium]}>
      <View style={{ flex: 1.8 }}>
        <HeadingThree bold style={bannerStyles.heading}>
          Book your Test Today!
        </HeadingThree>
        <Text style={bannerStyles.text}>
          loream ipsum lor loream loream loream ipsum
        </Text>
        <Pressable
          style={({ pressed }) => [
            bannerStyles.button,
            { backgroundColor: pressed ? '#1595b9' : COLORS.tertiary },
          ]}
        >
          <Text style={[bannerStyles.text, { fontSize: SIZES.medium }]}>
            Book Now
          </Text>
        </Pressable>
      </View>
      <View style={{ flex: 1, alignSelf: 'center' }}>
        <Image
          style={bannerStyles.image}
          source={require('../../../assets/images/doctor.png')}
        />
      </View>
    </View>
  );
};

export { Banner };
