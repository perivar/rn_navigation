/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type CustomDrawerParamList = {
  // default screens
  HomeTab: undefined;
};

export type CustomDrawerScreenProps<
  Screen extends keyof CustomDrawerParamList
> = CompositeScreenProps<
  DrawerScreenProps<CustomDrawerParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RootStackParamList = {
  // default screens
  // Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  // NotFound: undefined;
  Book: undefined;
  Contact: undefined;
  Home: undefined;
  Locations: undefined;
  MyRewards: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  // default tabs
  HomeStack: undefined;
  BookStack: undefined;
  ContactStack: undefined;
  MyRewardsStack: undefined;
  LocationsStack: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type RootTabNavigationProps<Screen extends keyof RootTabParamList> =
  CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, Screen>,
    NativeStackNavigationProp<RootStackParamList>
  >;
