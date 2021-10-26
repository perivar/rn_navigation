import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { RootTabParamList } from '../types';
import { routes, screens } from './RouteItems';
import BookStackNavigator from './stack-navigators/BookStackNavigator';
import ContactStackNavigator from './stack-navigators/ContactStackNavigator';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import LocationsStackNavigator from './stack-navigators/LocationsStackNavigator';
import MyRewardsStackNavigator from './stack-navigators/MyRewardsStackNavigator';

const Tab = createBottomTabNavigator<RootTabParamList>();

type Props = BottomTabNavigationOptions & {
  route: RouteProp<RootTabParamList, keyof RootTabParamList>;
  navigation: unknown;
};

const tabOptions = ({ route }: Props): BottomTabNavigationOptions => {
  const item = routes.find(routeItem => routeItem.name === route.name);

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    };
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Tab.Screen name={screens.BookStack} component={BookStackNavigator} />
      <Tab.Screen
        name={screens.ContactStack}
        component={ContactStackNavigator}
      />
      <Tab.Screen
        name={screens.MyRewardsStack}
        component={MyRewardsStackNavigator}
      />
      <Tab.Screen
        name={screens.LocationsStack}
        component={LocationsStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  },
});

export default BottomTabNavigator;
