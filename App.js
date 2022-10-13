/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './src/frames/SignIn';
import GetStarted from './src/frames/GetStarted';
import SignUp from './src/frames/SignUp';
import ToVerify from './src/frames/ToVerify';
import VerifyPhone from './src/frames/VerifyPhone';
import VerifyCode from './src/frames/VerifyCode';
import VerifyDone from './src/frames/VerifyDone';
import ChangePassword from './src/frames/ChangePassword';
import ForgotPassword from './src/frames/ForgotPassword';
import Home from './src/frames/Home';

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
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ToVerify" component={ToVerify} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="VerifyDone" component={VerifyDone} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
