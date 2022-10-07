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

const SignIn = ({navigation}) => {
  const [getSight, setSight] = useState(true);
  return (
    <ImageBackground
      source={require('../assets/signinbackground.png')}
      style={{flex: 1, height: height, width: width}}
      resizeMode="stretch">
      <View
        style={{
          flex: 1 / 3,
          justifyContent: 'flex-end',
        }}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </View>
      <View
        style={{
          flex: 1 / 3,
        }}>
        {/*Email vs password container*/}
        <View
          style={{
            height: '100%',
            width: '100%',
          }}>
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
          <View style={styles.passwordContainer}>
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
            />
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setSight(!getSight);
              }}>
              <Image
                source={require('../assets/eyeicon.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
            style={{
              alignItems: 'flex-end',
              marginRight: width * 0.1,
              marginTop: height * 0.045,
              marginLeft: width * 0.55,
            }}>
            <Text style={{fontSize: height * 0.02, color: 'white'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={event => {}}>
              <Text style={{color: 'black', fontSize: height * 0.02}}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1 / 3,
          marginLeft: width * 0.1,
          marginRight: width * 0.1,
        }}>
        <View style={styles.connectViewSpace}>
          <View style={styles.line} />
          <Text style={styles.textBetweenLines}>Or connect with</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.connectView}>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../assets/facebookicon.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: width * 0.03}} onPress={() => {}}>
            <Image
              source={require('../assets/googleicon.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              source={require('../assets/twittericon.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.connectView}>
          <Text style={{color: 'white'}}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={{color: '#CBFB5E'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  connectViewSpace: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  connectView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBetweenLines: {
    color: '#9f9f9f',
    marginRight: width * 0.05,
    marginLeft: width * 0.05,
    fontSize: height * 0.015,
  },
  line: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: '#9f9f9f',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: height * 0.015,
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
    height: height * 0.05,
    alignItems: 'center',
    borderBottomColor: '#9f9f9f',
    borderBottomWidth: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    marginTop: height * 0.04,
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
export default SignIn;
