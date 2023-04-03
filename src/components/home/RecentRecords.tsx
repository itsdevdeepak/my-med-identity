import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import { HeadingTwo, RecordListItem } from '../common';

const recordsStyles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    color: COLORS.netural,
  },
});

const data = [
  { name: 'Record Title 1', tagLine: '1-2-2023' },
  { name: 'Record Title 2', tagLine: '1-2-2023' },
  { name: 'Record Title 3', tagLine: '1-2-2023' },
  { name: 'Record Title 4', tagLine: '1-2-2023' },
  { name: 'Record Title 5', tagLine: '1-2-2023' },
  { name: 'Record Title 6', tagLine: '1-2-2023' },
  { name: 'Record Title 7', tagLine: '1-2-2023' },
  { name: 'Record Title 8', tagLine: '1-2-2023' },
  { name: 'Record Title 9', tagLine: '1-2-2023' },
  { name: 'Record Title 10', tagLine: '1-2-2023' },
];
const RecentRecords = () => {
  return (
    <View style={recordsStyles.container}>
      <HeadingTwo bold style={recordsStyles.heading}>
        Records
      </HeadingTwo>
      {data.map((record, idx) => (
        <RecordListItem
          title={record.name}
          tagLine={record.tagLine}
          key={idx}
        />
      ))}
    </View>
  );
};

export { RecentRecords };
