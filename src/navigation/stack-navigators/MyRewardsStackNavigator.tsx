import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { RootStackParamList } from '../../types';
import { screens } from '../RouteItems';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyRewards = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>MyRewards screen!</Text>
  </View>
);

const MyRewardsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.MyRewards} component={MyRewards} />
    </Stack.Navigator>
  );
};

export default MyRewardsStackNavigator;
