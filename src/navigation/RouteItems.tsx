import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';

import { COLORS } from '../constants/crypto';

export enum screens {
  HomeTab = 'HomeTab',
  HomeStack = 'HomeStack',
  Home = 'Home',
  BookStack = 'BookStack',
  Book = 'Book',
  ContactStack = 'ContactStack',
  Contact = 'Contact',
  MyRewardsStack = 'MyRewardsStack',
  MyRewards = 'MyRewards',
  LocationsStack = 'LocationsStack',
  Locations = 'Locations',
}

export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <FontAwesome
        name="home"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: true,
    icon: (focused: boolean) => (
      <FontAwesome
        name="home"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <FontAwesome
        name="home"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },

  {
    name: screens.BookStack,
    focusedRoute: screens.BookStack,
    title: 'Book Room',
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <FontAwesome
        name="bed"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },

  {
    name: screens.Book,
    focusedRoute: screens.BookStack,
    title: 'Book Room',
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <FontAwesome
        name="bed"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },

  {
    name: screens.ContactStack,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <FontAwesome
        name="phone"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },
  {
    name: screens.Contact,
    focusedRoute: screens.ContactStack,
    title: 'Contact Us',
    showInTab: false,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <FontAwesome
        name="phone"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },

  {
    name: screens.MyRewardsStack,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: false,
    showInDrawer: true,
    icon: (focused: boolean) => (
      <FontAwesome
        name="star"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },
  {
    name: screens.MyRewards,
    focusedRoute: screens.MyRewardsStack,
    title: 'My Rewards',
    showInTab: false,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <FontAwesome
        name="star"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },

  {
    name: screens.LocationsStack,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: false,
    showInDrawer: true,
    icon: (focused: boolean) => (
      <FontAwesome
        name="map-marker"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },
  {
    name: screens.Locations,
    focusedRoute: screens.LocationsStack,
    title: 'Locations',
    showInTab: false,
    showInDrawer: false,
    icon: (focused: boolean) => (
      <FontAwesome
        name="map-marker"
        size={30}
        color={focused ? COLORS.secondary : '#000'}
      />
    ),
  },
];
