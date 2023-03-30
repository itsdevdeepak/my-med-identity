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
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 135,
    minHeight: 135,
  },
  cardTextContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: 'auto',
    justifyContent: 'flex-end',
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
      <View style={CardStyles.content}>
        <View
          style={{
            marginBottom: 'auto',
            marginTop: 'auto',
          }}
        >
          <Icon name={icon} width={75} height={75} />
        </View>
        <View style={CardStyles.cardTextContainer}>
          <Text numberOfLines={1} bold style={{ color: COLORS.secondary }}>
            {cardTitle}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export { QuickNavigationCard };
