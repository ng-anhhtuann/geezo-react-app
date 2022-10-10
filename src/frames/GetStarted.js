/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PictureSwitch from '../shared/PictureSwitch';
const {width, height} = Dimensions.get('window');
// var position = 0;
// var img;
const GetStarted = ({navigation}) => {
  const images = [
    {id: 1, img: require('../assets/scr1.png'), title: 'scr1'},
    {id: 2, img: require('../assets/scr2.png'), title: 'scr2'},
    {id: 3, img: require('../assets/scr3.png'), title: 'scr3'},
    {id: 4, img: require('../assets/scr4.png'), title: 'scr4'},
  ];
  const [scrollWidth, setScrollWidth] = useState(0);
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView style={{flex: 1.5}}>
        <ScrollView
          style={{height: height / 2, width}}
          horizontal={true}
          scrollEventThrottle={16}
          onScroll={event => {
            setScrollWidth(
              Math.floor(Math.abs(event.nativeEvent.contentOffset.x)),
            );
            console.log(scrollWidth + ' ' + width);
            // position = scrollWidth / width;
            // img = images[position].img;
          }}
          showsHorizontalScrollIndicator={false}>
          {images.map(image => {
            return (
              <Image
                key={image.id}
                style={{height: height / 2, width}}
                resizeMode="cover"
                source={image.img}
              />
            );
          })}
        </ScrollView>
        <View style={{height: height / 2, flex: 1}}>
          <View style={styles.marginContainer}>
            {images.map((image, index, array) => {
              return (
                <PictureSwitch
                  key={image.id}
                  state={scrollWidth >= (index - 1 / 2) * width || index === 0}
                />
              );
            })}
          </View>
          <View style={styles.marginText}>
            <Text style={{color: '#CBFB5E', fontSize: height * 0.015}}>
              APP UI KIT
            </Text>
            <Text style={{color: '#FFFFFF', fontSize: height * 0.037}}>
              WELCOME TO GEEZ APP
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: height * 0.018,
              }}>
              Make your design workflow easier and save your time.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            delayPressIn={50}
            onPress={event => {
              navigation.navigate('SignIn');
            }}>
            <Text style={{color: 'black', fontSize: height * 0.02}}>
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    // backgroundColor: '#0E0B1F',
    flex: 1,
  },
  button: {
    flex: 1.5,
    borderRadius: height * 0.015,
    alignItems: 'center',
    marginBottom: height * 0.12,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    justifyContent: 'center',
    backgroundColor: '#CBFB5E',
  },
  marginContainer: {
    flex: 2,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginText: {
    flex: 7,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
  },
});

export default GetStarted;
