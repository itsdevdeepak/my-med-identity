import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/theme';
import { HeadingTwo, RecordListItem } from '../common';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProps } from '../../navigation/types';
import { useAppSelector } from '../../utils/hooks';

const recordsStyles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    color: COLORS.netural,
  },
});

const RecentRecords = () => {
  const records = useAppSelector((state) => state.records).entities;
  const navigation =
    useNavigation<TabNavigationProps<'Records'>['navigation']>();
  return (
    <View style={recordsStyles.container}>
      <HeadingTwo bold style={recordsStyles.heading}>
        Records
      </HeadingTwo>
      {records.map((record, idx) => (
        <RecordListItem
          title={record.name}
          tagLine={record.date}
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
