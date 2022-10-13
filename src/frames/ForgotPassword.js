/* eslint-disable react-native/no-inline-styles */
import {React, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import validateEmail from '../shared/MailRegex';

const {width, height} = Dimensions.get('window');

const ForgotPassword = ({navigation}) => {
  // const showAlert = () => {
  //   this.setState({
  //     showAlert: true,
  //   });
  // };
  const {mail, setMail} = useState('');
  return (
    <SafeAreaView style={styles.parent}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack(1);
        }}
        style={styles.backButton}>
        <Image
          source={require('../assets/backicon.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <View style={{flex: 4}}>
        <Text style={{color: 'white', fontSize: height * 0.03}}>
          Forgot Password?
        </Text>
        <Text style={styles.longText}>
          If you need help resetting your password, we can help by sending you a
          link to reset it.
        </Text>
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
            onTextChange={text => {
              setMail(text);
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={event => {
            if (validateEmail(mail)) {
              /*  + Check if email is existed in database */
              /*     => send link allowance to change password */
              navigation.navigate('ChangePassword');
            } else {
              return (
                <AwesomeAlert
                  // show={showAlert}
                  showProgress={false}
                  title="AwesomeAlert"
                  message="I have a message for you!"
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showCancelButton={true}
                  showConfirmButton={true}
                  cancelText="No, cancel"
                  confirmText="Yes, delete it"
                  confirmButtonColor="#DD6B55"
                  onCancelPressed={() => {
                    this.hideAlert();
                  }}
                  onConfirmPressed={() => {
                    this.hideAlert();
                  }}
                />
              );
            }
          }}>
          <Text style={{color: 'black', fontSize: height * 0.02}}>SEND</Text>
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
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
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
  emailContainer: {
    flexDirection: 'row',
    marginTop: height * 0.125,
    height: height * 0.05,
    alignItems: 'center',
    borderBottomColor: '#9f9f9f',
    borderBottomWidth: 1.2,
  },
});
export default ForgotPassword;
