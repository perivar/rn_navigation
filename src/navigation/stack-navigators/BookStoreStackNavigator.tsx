import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { BookDetail, BookHome } from '../../screens';
import { RootStackParamList } from '../../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const BookStoreStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'BookHome'}>
      <Stack.Screen name="BookHome" component={BookHome} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
    </Stack.Navigator>
  );
};

export default BookStoreStackNavigator;
