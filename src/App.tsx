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
import { StatusBar, View } from 'react-native';
import { COLORS } from './constants/theme';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
  });

  if (!poppinsLoaded) return null;
  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={{ backgroundColor: COLORS.primary, flex: 1 }}>
          <AppNavigator />
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={COLORS.primary}
          />
        </View>
      </Provider>
    </NavigationContainer>
  );
};

registerRootComponent(App);

export default App;
