import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../constants/theme';
import { HeadingThree, Text } from './Headings';
import { Icon } from './Icon';

const ListItemStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  listIcon: {},
  content: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  itemInTheEnd: {
    marginLeft: 'auto',
  },
});

type ListItemsProps = {
  title: string;
  tagLine: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const RecordListItem = ({ title, tagLine, onPress }: ListItemsProps) => {
  return (
    <TouchableHighlight
      style={[ListItemStyles.container, SHADOWS.medium]}
      underlayColor="#eeeeee"
      onPress={onPress}
    >
      <View style={[ListItemStyles.content]}>
        <View style={[ListItemStyles.listIcon]}>
          <Icon name="file" height={50} width={50} fill={COLORS.secondary} />
        </View>
        <View>
          <HeadingThree
            bold
            style={{ lineHeight: 20, color: COLORS.secondary }}
          >
            {title}
          </HeadingThree>
          <Text
            style={{
              lineHeight: 15,
              color: COLORS.neturalLight,
              fontSize: SIZES.small,
            }}
          >
            {tagLine}
          </Text>
        </View>
        <View style={ListItemStyles.itemInTheEnd}>
          <Icon name="chevron-right" fill={COLORS.secondary} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export { RecordListItem };
