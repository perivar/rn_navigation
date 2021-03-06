import { FontAwesome } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { COLORS } from '../constants/crypto';
import { AppChooserContext } from '../context/appChooserContext';
import {
  CustomDrawerParamList,
  CustomDrawerScreenProps,
  RootStackParamList,
} from '../types';
import BookStoreBottomTabNavigator from './BookStoreBottomTabNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import CryptoBottomTabNavigator from './CryptoBottomTabNavigator';
import { routes, screens } from './RouteItems';

const Drawer = createDrawerNavigator<CustomDrawerParamList>();

type NavProp = {
  nav: () => NavigationContainerRef<RootStackParamList>;
};

type DrawerContentProps = DrawerContentComponentProps & NavProp;

const CustomDrawerContent = (props: DrawerContentProps) => {
  const { theme, setTheme } = React.useContext(AppChooserContext);
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;
  console.log('route: ' + currentRouteName);
  return (
    <DrawerContentScrollView {...props}>
      {theme === 'original' &&
        routes
          .filter(route => route.showInDrawer)
          .map(route => {
            const focusedRoute = routes.find(r => r.name === currentRouteName);
            const focused = focusedRoute
              ? route.name === focusedRoute?.focusedRoute
              : route.name === screens.HomeStack;
            return (
              <DrawerItem
                key={route.name}
                label={() => (
                  <Text
                    style={
                      focused ? styles.drawerLabelFocused : styles.drawerLabel
                    }>
                    {route.title}
                  </Text>
                )}
                onPress={() => props.navigation.navigate(route.name)}
                style={[
                  styles.drawerItem,
                  focused ? styles.drawerItemFocused : null,
                ]}
              />
            );
          })}
      {theme !== 'original' && (
        <>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Original"
            onPress={() => {
              setTheme('original');
              props.navigation.closeDrawer();
            }}
          />
        </>
      )}
      <DrawerItem
        label="Crypto"
        onPress={() => {
          setTheme('crypto');
          props.navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Book Store"
        onPress={() => {
          setTheme('bookstore');
          props.navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({ nav }: NavProp) => {
  const { theme, setTheme } = React.useContext(AppChooserContext);
  return (
    <Drawer.Navigator
      screenOptions={({
        navigation,
      }: DrawerScreenProps<CustomDrawerParamList>) => ({
        headerShown: theme === 'original' ? true : false,
        headerStyle: {
          backgroundColor: COLORS.secondary,
          height: 50,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}>
            <FontAwesome name="bars" size={20} color="#fff" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => <CustomDrawerContent {...props} nav={nav} />}>
      <Drawer.Screen
        name={screens.HomeTab}
        component={
          theme === 'bookstore'
            ? BookStoreBottomTabNavigator
            : theme === 'crypto'
            ? CryptoBottomTabNavigator
            : BottomTabNavigator
        }
        options={({ navigation }: CustomDrawerScreenProps<'HomeTab'>) => ({
          title: 'Home',
          headerTintColor: COLORS.white,
          // headerTitle: () => (
          //   <Image source={require('../../assets/hotel_logo.jpg')} />
          // ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <View style={styles.headerRight}>
                <FontAwesome name="bell" size={20} color="#fff" />
              </View>
            </Pressable>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: COLORS.secondary,
  },
});

export default DrawerNavigator;
