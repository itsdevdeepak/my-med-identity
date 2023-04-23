import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import { AuthStackParamList } from './types';
import AdditionalDetails from '../screens/AdditionalDetails';

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Navigator initialRouteName="SighIn" screenOptions={{ headerShown: false }}>
      <Screen name="SighIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="AdditionalDetails" component={AdditionalDetails} />
    </Navigator>
  );
};

export default AuthNavigator;
