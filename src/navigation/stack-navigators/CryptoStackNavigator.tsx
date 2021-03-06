import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { CryptoDetail, CryptoHome, CryptoTransaction } from '../../screens';
import { RootStackParamList } from '../../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const CryptoStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'CryptoHome'}>
      <Stack.Screen name="CryptoHome" component={CryptoHome} />
      <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
      <Stack.Screen name="CryptoTransaction" component={CryptoTransaction} />
    </Stack.Navigator>
  );
};

export default CryptoStackNavigator;
