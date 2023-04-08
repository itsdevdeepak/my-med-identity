import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/theme';
import { Search } from '../components/records';

const Records = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Search />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
});

export default Records;
