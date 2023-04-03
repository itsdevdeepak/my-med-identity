import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  type GestureResponderEvent,
} from 'react-native';
import { COLORS, SHADOWS } from '../../constants/theme';
import { Text } from './Headings';
import { Icon, type IconName } from './Icon';

const CardStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    margin: 10,
  },
  content: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTextContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    // padding: 5,
    minHeight: 45,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});

type QuickNavigationCardProps = {
  cardTitle: string;
  icon: IconName;
  onPress?: (event: GestureResponderEvent) => void;
};

const QuickNavigationCard = ({
  cardTitle,
  icon,
  onPress,
}: QuickNavigationCardProps) => {
  return (
    <TouchableHighlight
      underlayColor="#115d80"
      onPress={onPress}
      style={[CardStyles.container, SHADOWS.medium]}
    >
      <View style={[CardStyles.content]}>
        <View
          style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}
        >
          <Icon name={icon} width={60} height={60} />
        </View>
        <View style={[CardStyles.cardTextContainer]}>
          <Text
            numberOfLines={2}
            bold
            style={{ color: COLORS.secondary, textAlign: 'center' }}
          >
            {cardTitle}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export { QuickNavigationCard };
