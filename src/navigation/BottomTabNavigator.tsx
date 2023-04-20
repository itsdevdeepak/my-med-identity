import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Records from '../screens/Records';
import Profile from '../screens/Profile';
import { TabBar } from '../components/TabBar';

const { Navigator, Screen } = createBottomTabNavigator();

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
    </Navigator>
  );
};

export default BottomTabNavigator;
