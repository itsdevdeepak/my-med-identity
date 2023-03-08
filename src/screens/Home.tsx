import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const Home = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
