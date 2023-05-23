import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import {
  Banner,
  Header,
  QuickNavigation,
  RecentRecords,
} from '../components/home';
import { useAppDispatch } from '../utils/hooks';
import { getRecords } from '../features/records/recordsAction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  scrollView: {},
});

const Home = () => {
  const dispatch = useAppDispatch();
  dispatch(getRecords());
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <Banner />
        <QuickNavigation />
        <RecentRecords />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
