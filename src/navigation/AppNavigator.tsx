import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import { useAppSelector } from '../utils/hooks';
import { POST_SIGNUP_STATUS } from '../features/auth/authSlice';

const AppNavigator = () => {
  const { token, postSignUp } = useAppSelector((state) => state.auth);
  const isLoggedIn =
    token && postSignUp !== POST_SIGNUP_STATUS.WAITING ? true : false;
  return isLoggedIn ? <BottomTabNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
