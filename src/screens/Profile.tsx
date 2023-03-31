import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/theme';

const Profile = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
