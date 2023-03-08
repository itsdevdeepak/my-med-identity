import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavigator = () => {
  const isLoggedIn = true;
  return isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
