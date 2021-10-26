import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import { RootStackParamList } from '../../types';
import { screens } from '../RouteItems';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Book = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Book screen!</Text>
  </View>
);

const BookStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Book} component={Book} />
    </Stack.Navigator>
  );
};

export default BookStackNavigator;
