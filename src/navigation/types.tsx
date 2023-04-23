import type {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import type { RecordType } from '../components/record/types';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
export type AuthStackParamList = {
  SighIn: undefined;
  SignUp: undefined;
  AdditionalDetails: undefined;
};

export type AuthNavigationProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

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
  BottomTabScreenProps<TabParamList, T>;
