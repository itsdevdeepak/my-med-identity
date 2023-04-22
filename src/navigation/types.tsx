import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RecordType } from '../components/record/types';
import type { RouteProp } from '@react-navigation/native';

export type TabParamList = {
  Home: undefined;
  Records: undefined;
  Record: RecordType;
  Profile: undefined;
};

export type RecordScreenProps = {
  naviagation: BottomTabNavigationProp<TabParamList, 'Record'>;
  route: RouteProp<TabParamList, 'Record'>;
};

export type TabNavigationProps<T extends keyof TabParamList> =
  BottomTabNavigationProp<TabParamList, T>;
