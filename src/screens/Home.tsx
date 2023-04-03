import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import { Header, QuickNavigation, RecentRecords } from '../components/home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  scrollView: {},
});

const Home = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
      <QuickNavigation />
      <RecentRecords />
    </ScrollView>
  </SafeAreaView>
);

export default Home;
