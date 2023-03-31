import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts as usePoppins,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppNavigator from './navigation/AppNavigator';
import { View } from 'react-native';
import { COLORS } from './constants/theme';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
  });

  if (!poppinsLoaded) return null;

  return (
    <NavigationContainer>
      <View style={{ backgroundColor: COLORS.primary, flex: 1 }}>
        <AppNavigator />
        <StatusBar backgroundColor={COLORS.primary} />
      </View>
    </NavigationContainer>
  );
};

registerRootComponent(App);

export default App;
