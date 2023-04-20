import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/theme';
import { Header, UserDetails } from '../components/profile';

const Profile = () => {
  const isEditabbleHook = useState<boolean>(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header
          name="Depz XD"
          email="email@email.com"
          isEditableHook={isEditabbleHook}
        />
        <UserDetails isEditableHook={isEditabbleHook} />
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

export default Profile;
