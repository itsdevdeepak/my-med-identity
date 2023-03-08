import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Records from '../screens/Records';
import Profile from '../screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Records" component={Records} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default BottomTabNavigator;
