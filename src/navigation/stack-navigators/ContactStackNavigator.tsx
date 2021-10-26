import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { RootStackParamList } from '../../types';
import { screens } from '../RouteItems';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Contact = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Contact screen!</Text>
  </View>
);

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Contact} component={Contact} />
    </Stack.Navigator>
  );
};

export default ContactStackNavigator;
