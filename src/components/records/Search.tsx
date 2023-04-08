import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { HeadingTwo, Icon, Option, RecordListItem, Text } from '../common';
import { TextInput } from '../common/Form';
import { COLORS, SHADOWS } from '../../constants/theme';
const searchBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  input: {
    borderRadius: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
});

const SearchBar = () => {
  return (
    <View style={[searchBarStyles.container, SHADOWS.medium]}>
      <View style={{ justifyContent: 'center' }}>
        <Icon name="search" width={30} height={30} fill={COLORS.netural} />
      </View>
      <View style={{ flex: 8 }}>
        <TextInput placeholder="Search" style={searchBarStyles.input} />
      </View>
    </View>
  );
};

const data = [
  { name: 'Record Title 1', tagLine: '1-2-2023' },
  { name: 'Record Title 2', tagLine: '1-2-2023' },
  { name: 'Record Title 2', tagLine: '1-2-2023' },
  { name: 'Record Title 2', tagLine: '1-2-2023' },
  { name: 'Record Title 2', tagLine: '1-2-2023' },
  { name: 'Record Title 2', tagLine: '1-2-2023' },
  { name: 'Record Title 2', tagLine: '1-2-2023' },
];

const searchResultStyles = StyleSheet.create({
  heading: {
    color: COLORS.netural,
    marginBottom: 5,
  },
});

const SearchResult = () => {
  return (
    <View>
      <HeadingTwo bold style={searchResultStyles.heading}>
        Search Results
      </HeadingTwo>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {data.map((record, idx) => (
          <RecordListItem
            title={record.name}
            tagLine={record.tagLine}
            key={idx}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const searchStyles = StyleSheet.create({
  container: {},
  options: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 5,
  },
});

const Search = () => {
  const [isMedicalRecord, setIsMedicalRecord] = useState(false);
  const [isTestReport, setisTestReport] = useState(false);
  return (
    <View style={searchStyles.container}>
      <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10 }}>
        <View style={{ flex: 2 }}>
          <SearchBar />
        </View>
        <View style={[searchStyles.icon, SHADOWS.medium]}>
          <Icon name="close" fill={COLORS.netural} height={30} width={30} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginBottom: 15,
        }}
      >
        <Text bold style={{ color: COLORS.netural }}>
          Type :
        </Text>
        <View style={searchStyles.options}>
          <Option
            toggle={isMedicalRecord}
            onPress={() => setIsMedicalRecord(!isMedicalRecord)}
          >
            Medical Record
          </Option>
          <Option
            toggle={isTestReport}
            onPress={() => setisTestReport(!isTestReport)}
          >
            Test Report
          </Option>
        </View>
      </View>
      <SearchResult />
    </View>
  );
};

export { Search };
