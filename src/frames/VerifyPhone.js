/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  View,
  StyleSheet,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const VerifyPhone = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack(1);
        }}
        style={styles.backButton}>
        <Image
          source={require('../assets/backicon.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{flex: 4}}>
        <Text
          style={{
            color: 'white',
            fontSize: height * 0.03,
            paddingRight: width * 0.2,
          }}>
          To continue enter your phone number
        </Text>
        <View style={styles.phoneContainer}>
          <View style={styles.iconImage}>
            <Image
              source={require('../assets/phoneicon.png')}
              resizeMode="contain"
            />
          </View>
          <TextInput
            style={styles.textInput}
            fontSize={height * 0.02}
            placeholder="Phone"
            keyboardType="number-pad"
            maxLength={20}
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholderTextColor="#9f9f9f"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={event => {
            /*Logic to add: Send verification code to phone number
            then init*/
            navigation.navigate('VerifyCode');
          }}>
          <Text style={{color: 'black', fontSize: height * 0.02}}>
            CONTINUE
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
  longText: {
    color: '#9f9f9f',
    fontSize: height * 0.015,
    marginTop: height * 0.03,
    marginRight: width * 0.15,
  },
  parent: {
    flex: 1,
    marginLeft: width * 0.075,
    marginRight: width * 0.075,
  },
  iconImage: {
    height: '100%',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
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
  textInput: {
    color: '#9F9F9F',
    borderBottomColor: '#9F9F9F',
    marginLeft: width * 0.05,
    width: '80%',
    height: '100%',
  },
  phoneContainer: {
    flexDirection: 'row',
    marginTop: height * 0.125,
    height: height * 0.05,
    alignItems: 'center',
    borderBottomColor: '#9f9f9f',
    borderBottomWidth: 1.2,
  },
});
export default VerifyPhone;
