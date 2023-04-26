import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { HeadingTwo, Icon, Option, RecordListItem, Text } from '../common';
import { TextInput } from '../common/Form';
import { COLORS, SHADOWS } from '../../constants/theme';
import { useAppSelector } from '../../utils/hooks';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationProps } from '../../navigation/types';
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

const SearchBar = ({
  searchQueryHook,
}: {
  searchQueryHook: [string, React.Dispatch<string>];
}) => {
  const [searchQuery, setSearchQuery] = searchQueryHook;
  return (
    <View style={[searchBarStyles.container, SHADOWS.medium]}>
      <View style={{ justifyContent: 'center' }}>
        <Icon name="search" width={30} height={30} fill={COLORS.netural} />
      </View>
      <View style={{ flex: 8 }}>
        <TextInput
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          placeholder="Search"
          style={searchBarStyles.input}
        />
      </View>
    </View>
  );
};

const searchResultStyles = StyleSheet.create({
  heading: {
    color: COLORS.netural,
    marginBottom: 5,
  },
});

const SearchResult = ({ query }: { query: string }) => {
  const records = useAppSelector((state) => state.records).entities;
  const searchedItems = records.filter((record) => record.name.match(query));
  const navigation =
    useNavigation<TabNavigationProps<'Records'>['navigation']>();
  return (
    <View>
      <HeadingTwo bold style={searchResultStyles.heading}>
        Search Results
      </HeadingTwo>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {searchedItems.map((record, idx) => (
          <RecordListItem
            onPress={() => navigation.navigate('Record', { ...record })}
            title={record.name}
            tagLine={record.tagName}
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
  const searchQueryHook = useState('');
  const [isTestReport, setisTestReport] = useState(false);
  return (
    <View style={searchStyles.container}>
      <View style={{ flexDirection: 'row', gap: 10, marginBottom: 10 }}>
        <View style={{ flex: 2 }}>
          <SearchBar searchQueryHook={searchQueryHook} />
        </View>
        {searchQueryHook[0] && (
          <Pressable
            onPress={() => searchQueryHook[1]('')}
            style={({ pressed }) => [
              searchStyles.icon,
              SHADOWS.medium,
              { backgroundColor: pressed ? '#eee' : '#fff' },
            ]}
          >
            <Icon name="close" fill={COLORS.netural} height={30} width={30} />
          </Pressable>
        )}
      </View>
      {searchQueryHook[0] && (
        <View>
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
          <SearchResult query={searchQueryHook['0']} />
        </View>
      )}
    </View>
  );
};

export { Search };
