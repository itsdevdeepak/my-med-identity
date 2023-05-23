import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RecordListItem } from './RecordListItem';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProps } from '../../navigation/types';
import { Record } from '../../features/records/recordsAction';

const recordListStyles = StyleSheet.create({
  container: {},
});

const RecordList = ({ records = [] }: { records: Record[] }) => {
  const navigation =
    useNavigation<TabNavigationProps<'Records'>['navigation']>();
  return (
    <View style={recordListStyles.container}>
      {records.map((record) => (
        <RecordListItem
          key={record.id}
          title={record.name}
          tagLine={record.date}
          onPress={() => navigation.navigate('Record', record)}
        />
      ))}
    </View>
  );
};

export { RecordList };
