import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RecordType } from '../record';
import { RecordListItem } from './RecordListItem';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProps } from '../../navigation/types';

const recordListStyles = StyleSheet.create({
  container: {},
});

const RecordList = ({ records = [] }: { records: RecordType[] }) => {
  const navigation =
    useNavigation<TabNavigationProps<'Records'>['navigation']>();
  return (
    <View style={recordListStyles.container}>
      {records.map((record) => (
        <RecordListItem
          key={record.id}
          title={record.name}
          tagLine={record.tagName}
          onPress={() => navigation.navigate('Record', record)}
        />
      ))}
    </View>
  );
};

export { RecordList };
