import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';

import { COLORS, icons } from '../constants/bookstore';
import { BookHome } from '../screens';
import BookStoreStackNavigator from './stack-navigators/BookStoreStackNavigator';

const Tab = createBottomTabNavigator();

const tabOptions = {
  tabBarShowLabel: false,
  tabBarStyle: {
    height: '10%',
    backgroundColor: COLORS.black,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...tabOptions,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Search':
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Notification':
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case 'Setting':
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={BookStoreStackNavigator} />
      <Tab.Screen name="Search" component={BookHome} />
      <Tab.Screen name="Notification" component={BookHome} />
      <Tab.Screen name="Setting" component={BookHome} />
    </Tab.Navigator>
  );
};

export default Tabs;
