import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Label } from '../components/common/Form';
import { COLORS } from '../constants/theme';

const SignIn = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Label>YOLO!</Label>
        <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
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
