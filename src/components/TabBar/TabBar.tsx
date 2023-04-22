import React from 'react';
import { GestureResponderEvent, Pressable, View } from 'react-native';
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { COLORS, SHADOWS } from '../../constants/theme';
import { Icon, IconName } from '../common';
import { TabBarStyles } from './TabBarStyles';

const TabBarItem = ({
  itemName,
  isFocused,
  onPress,
}: {
  itemName: string;
  isFocused: boolean;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  let iconName = 'home' as IconName;
  if (itemName === 'Record') return;

  if (itemName === 'Records') {
    iconName = 'calendarPlus';
  } else if (itemName === 'Profile') {
    iconName = 'userMenu';
  }
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            padding: 8,
            backgroundColor: pressed ? '#eee' : '#fff',
            borderRadius: 50,
          },
        ]}
      >
        <View
          style={[
            isFocused && {
              borderBottomWidth: 2,
              borderBottomColor: COLORS.netural,
            },
          ]}
        >
          <Icon
            name={iconName}
            fill={isFocused ? COLORS.netural : COLORS.neturalLight}
            width={38}
            height={38}
          />
        </View>
      </Pressable>
    </View>
  );
};

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={[TabBarStyles.container, SHADOWS.small]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const label = route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabBarItem
            key={index}
            itemName={label}
            isFocused={isFocused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

export { TabBar };
