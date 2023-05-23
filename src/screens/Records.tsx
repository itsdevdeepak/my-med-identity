import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { COLORS, SHADOWS } from '../constants/theme';
import { RecordForm, Search } from '../components/records';
import { useAppSelector } from '../utils/hooks';
import { HeadingTwo, PrimaryButton, RecordList } from '../components/common';

const Records = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const records = useAppSelector((state) => state.records).entities;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
          <Search />
          {isFormVisible && <RecordForm setFormVisibility={setIsFormVisible} />}
          <View>
            <HeadingTwo style={{ color: COLORS.netural }} bold>
              All Records
            </HeadingTwo>
            <RecordList records={records} />
          </View>
          {!isFormVisible && (
            <PrimaryButton
              style={{ marginTop: 20, ...SHADOWS.medium }}
              onPress={() => {
                setIsFormVisible(true);
              }}
            >
              Add New Record
            </PrimaryButton>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
});

export default Records;
