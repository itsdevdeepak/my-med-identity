import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/theme';
import { type TabNavigationProps } from '../navigation/types';
import { Content, Header } from '../components/record';

const Record = ({ route }: TabNavigationProps<'Record'>) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header id={route.params.id} />
        <Content {...route.params} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});

export default Record;
