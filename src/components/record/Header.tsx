import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Icon } from '../common';
import { COLORS, SHADOWS } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { type TabNavigationProps } from '../../navigation/types';
import { OptionMenu } from '../common/OptionMenu';

const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    ...SHADOWS.medium,
  },
  optionMenuContainer: {
    position: 'absolute',
    right: 20,
    top: 10,
    flexDirection: 'row-reverse',
  },
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation =
    useNavigation<TabNavigationProps<'Record'>['navigation']>();
  return (
    <View style={HeaderStyles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#eee' : '#fff' },
        ]}
      >
        <Icon name="left" fill={COLORS.neturalLight} />
      </Pressable>
      <View style={HeaderStyles.optionMenuContainer}>
        <Pressable
          onPress={() => setIsMenuOpen(!isMenuOpen)}
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#eee' : '#fff' },
          ]}
        >
          <Icon name="more" fill={COLORS.neturalLight} />
        </Pressable>
        <View style={{ display: isMenuOpen ? 'flex' : 'none' }}>
          <OptionMenu>
            <OptionMenu.Item danger onPress={() => 0} name="Delete" />
          </OptionMenu>
        </View>
      </View>
    </View>
  );
};

export { Header };
