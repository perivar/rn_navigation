import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, { createRef } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import useCachedResources from './src/hooks/useCachedResources';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { RootStackParamList } from './src/types';

const navigationRef = createRef<NavigationContainerRef<RootStackParamList>>();
const nav = () => navigationRef.current;

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer ref={navigationRef}>
          <DrawerNavigator nav={nav} />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default App;
