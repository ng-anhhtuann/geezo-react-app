/* eslint-disable react-native/no-inline-styles */
import {React, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const ToVerify = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View
        style={{
          flex: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: height * 0.03,
            textAlign: 'center',
          }}>
          Successfully verified!
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: height * 0.015,
            textAlign: 'center',
          }}>
          Press button to go back to sign in screen.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={event => {
            /*Logic to add: Check if verify code is true then navigation to the
            VerifyDone else return a text warning below*/
            navigation.navigate('SignIn');
          }}>
          <Text style={{color: 'black', fontSize: height * 0.02}}>
            BACK TO SIGN IN
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backButton: {
    flex: 1,
    justifyContent: 'center',
    width: width * 0.1,
  },
  parent: {
    flex: 1,
    marginLeft: width * 0.075,
    marginRight: width * 0.075,
  },
  buttonContainer: {
    flex: 5,
    paddingBottom: height * 0.015,
  },
  button: {
    borderRadius: height * 0.015,
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CBFB5E',
  },
});
export default ToVerify;
