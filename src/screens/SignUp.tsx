import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const SignUp = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text>Sign Up</Text>
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

export default SignUp;
