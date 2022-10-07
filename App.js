/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';

import GetStarted from './src/frames/GetStarted';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/frames/SignIn';
const Stack = createNativeStackNavigator();
const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0E0B1F',
  },
};
const App = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0E0B1F',
    flex: 1,
  },
});

export default App;
