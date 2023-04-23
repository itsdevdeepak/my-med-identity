import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Records from '../screens/Records';
import Profile from '../screens/Profile';
import { TabBar } from '../components/TabBar';
import Record from '../screens/Record';
import { TabParamList } from './types';

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>();

const BottomTabNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Records" component={Records} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Record" component={Record} />
    </Navigator>
  );
};

export default BottomTabNavigator;
