import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Label } from '../components/common/Form';

const SignIn = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Label>YOLO!</Label>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignIn;
