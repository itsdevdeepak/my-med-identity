import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Icon } from '../common';
import { COLORS, SHADOWS } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { type TabNavigationProps } from '../../navigation/types';
import { OptionMenu } from '../common/OptionMenu';
import { Record, removeRecord } from '../../features/records/recordsAction';
import { useAppDispatch } from '../../utils/hooks';

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

const Header = ({ id }: { id: Record['id'] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<TabNavigationProps<'Record'>['navigation']>();
  return (
    <View style={HeaderStyles.container}>
      <Pressable
        onPress={() => {
          setIsMenuOpen(false), navigation.goBack();
        }}
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
            <OptionMenu.Item
              danger
              onPress={() => {
                dispatch(removeRecord(id)),
                  setIsMenuOpen(false),
                  navigation.goBack();
              }}
              name="Delete"
            />
          </OptionMenu>
        </View>
      </View>
    </View>
  );
};

export { Header };
