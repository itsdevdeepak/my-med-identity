import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import { HeadingTwo, RecordListItem } from '../common';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProps } from '../../navigation/types';
import { RecordType } from '../record';

const recordsStyles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    color: COLORS.netural,
  },
});

const data: RecordType[] = [
  {
    name: 'Record Title 1',
    tagName: '1-2-2023',
    allergies: ['allergie 1', 'allergie 2', 'allergie 3'],
    discription:
      'really long descrtion too big to handel  alone cant do any thingg booo yaaa',
  },
  {
    name: 'Record Title 2',
    tagName: '1-2-2023',
    allergies: [
      'allergie 1',
      'allergie 2',
      'allergie 3',
      'allergie 3',
      'allergie 3',
      'allergie 3',
    ],
    discription: 'small  description so short mehhh!!!',
  },
  {
    name: 'Record Title 3',
    tagName: '1-2-2023',
    allergies: ['allergie 1'],
  },
  {
    name: 'Record Title 4',
    tagName: '1-2-2023',
    allergies: ['allergie 1', 'allergie 2', 'allergie 3'],
    discription:
      'really long descrtion too big to handel  alone cant do any thingg booo yaaa',
  },
];

const RecentRecords = () => {
  const navigation = useNavigation<TabNavigationProps<'Records'>>();
  return (
    <View style={recordsStyles.container}>
      <HeadingTwo bold style={recordsStyles.heading}>
        Records
      </HeadingTwo>
      {data.map((record, idx) => (
        <RecordListItem
          title={record.name}
          tagLine={record.tagName}
          key={idx}
          onPress={() =>
            navigation.navigate('Record', {
              ...record,
            })
          }
        />
      ))}
    </View>
  );
};

export { RecentRecords };
