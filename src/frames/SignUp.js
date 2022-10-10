/* eslint-disable react-native/no-inline-styles */
import {React, useState} from 'react';

import {
  View,
  Text,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const SignUp = ({navigation}) => {
  const [getSight, setSight] = useState(true);
  const [getPwd, setPwd] = useState('');

  return (
    <ImageBackground
      source={require('../assets/signupbackground.png')}
      style={{flex: 1, height: height, width: width}}
      resizeMode="stretch">
      <View
        style={{
          flex: 1 / 3,
          justifyContent: 'flex-end',
        }}>
        <Text style={styles.signInText}>SIGN UP</Text>
      </View>
      <View
        style={{
          flex: 2 / 3,
          marginTop: height * 0.05,
        }}>
        {/*Email vs name vs password container*/}
        <View
          style={{
            height: '100%',
            width: '100%',
          }}>
          {/*Name*/}
          <View style={styles.propContainer}>
            <View style={styles.iconImage}>
              <Image
                source={require('../assets/nameicon.png')}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={styles.textInput}
              fontSize={height * 0.02}
              placeholder="Name"
              placeholderTextColor="#9f9f9f"
            />
          </View>
          {/*Email*/}
          <View style={styles.emailContainer}>
            <View style={styles.iconImage}>
              <Image
                source={require('../assets/mailicon.png')}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={styles.textInput}
              fontSize={height * 0.02}
              placeholder="Email"
              placeholderTextColor="#9f9f9f"
            />
          </View>
          {/*Password*/}
          <View style={styles.propContainer}>
            <View style={styles.iconImage}>
              <Image
                source={require('../assets/lockicon.png')}
                resizeMode="contain"
              />
            </View>
            <TextInput
              style={styles.textInput}
              secureTextEntry={getSight ? true : false}
              fontSize={height * 0.02}
              placeholder="Password"
              placeholderTextColor="#9f9f9f"
              onChangeText={text => setPwd(text)}
            />
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                if (getPwd.length > 0) {
                  setSight(!getSight);
                }
              }}>
              <Image
                source={require('../assets/eyeicon.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={event => {
                /*Logic to add: check if email is true-form ( navigate to VerifyPhone) then return warning 
                bottom*/
                navigation.navigate('VerifyPhone');
              }}>
              <Text style={{color: 'black', fontSize: height * 0.02}}>
                SIGN UP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: height * 0.03,
                marginLeft: width * 0.4,
                marginRight: width * 0.4,
              }}
              onPress={event => {
                navigation.goBack(1);
              }}>
              <Text style={{color: 'white', fontSize: height * 0.02}}>
                GO BACK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: height * 0.1,
  },
  button: {
    borderRadius: height * 0.015,
    height: height * 0.06,
    alignItems: 'center',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    justifyContent: 'center',
    backgroundColor: '#CBFB5E',
  },
  signInText: {
    flex: 1,
    marginTop: height * 0.2,
    marginLeft: width * 0.1,
    color: 'white',
    fontSize: height * 0.045,
  },
  emailContainer: {
    flexDirection: 'row',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    marginTop: height * 0.04,
    marginBottom: height * 0.04,
    height: height * 0.05,
    alignItems: 'center',
    borderBottomColor: '#9f9f9f',
    borderBottomWidth: 1,
  },
  propContainer: {
    flexDirection: 'row',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    height: height * 0.05,
    alignItems: 'center',
    borderBottomColor: '#9f9f9f',
    borderBottomWidth: 1,
  },
  iconImage: {
    height: '100%',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    color: '#9F9F9F',
    borderBottomColor: '#9F9F9F',
    marginLeft: width * 0.05,
    width: '80%',
    height: '100%',
  },
});
export default SignUp;
