import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

import ModalScreen from '../../screens/ModalScreen';
import { CustomDrawerScreenProps, RootStackParamList } from '../../types';
import { screens } from '../RouteItems';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Home = ({ navigation }: CustomDrawerScreenProps<'HomeTab'>) => (
  <View
    style={{
      flex: 1,
    }}>
    {/* <TouchableOpacity
      style={{
        marginLeft: 20,
        marginTop: 20,
      }}
      onPress={() => navigation.toggleDrawer()}>
      <FontAwesome name="bars" size={20} color="#000" />
    </TouchableOpacity> */}
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home screen!</Text>
    </View>
  </View>
);

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Home} component={Home} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
