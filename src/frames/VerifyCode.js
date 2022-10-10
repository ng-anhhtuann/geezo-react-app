/* eslint-disable react-native/no-inline-styles */
import {React, useState} from 'react';
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
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;
const {width, height} = Dimensions.get('window');

const VerifyCode = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
            paddingRight: width * 0.4,
          }}>
          Verify phone number
        </Text>
        <View
          style={{
            marginTop: height * 0.125,
            marginLeft: width * 0.05,
            marginRight: width * 0.05,
          }}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            // rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={event => {
            /*Logic to add: Check if verify code is true then navigation to the
            VerifyDone else return a text warning below*/
            // navigation.navigate('VerifyDone');
          }}>
          <Text style={{color: 'black', fontSize: height * 0.02}}>
            CONTINUE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: width * 0.3,
            marginRight: width * 0.3,
            marginTop: height * 0.05,
          }}
          onPress={event => {
            /*Logic to add: Re-Send verification code to phone number*/
          }}>
          <Text
            style={{
              color: '#CBFB5E',
              fontSize: height * 0.02,
              textAlign: 'center',
            }}>
            Resend Code
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
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
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
    color: '#CBFB5E',
    borderBottomColor: '#9F9F9F',
    marginLeft: width * 0.05,
    width: '80%',
    height: '100%',
  },
  codeContainer: {
    flexDirection: 'row',
    marginTop: height * 0.125,
    height: height * 0.05,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    alignItems: 'center',
    borderBottomColor: '#9f9f9f',
    borderBottomWidth: 1.2,
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: width * 0.1,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#9f9f9f',
    borderBottomWidth: 2,
  },
  cellText: {
    color: '#CBFB5E',
    fontSize: height * 0.05,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#CBFB5E',
    borderBottomWidth: 2,
  },
});
export default VerifyCode;
