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

import PictureSwitch from '../shared/PictureSwitch';
const {width, height} = Dimensions.get('window');
const GetStarted = () => {
  const images = [
    {id: 1, img: require('../assets/scr1.png'), title: 'scr1'},
    {id: 2, img: require('../assets/scr2.png'), title: 'scr2'},
    {id: 3, img: require('../assets/scr3.png'), title: 'scr3'},
    {id: 4, img: require('../assets/scr4.png'), title: 'scr4'},
  ];
  const [scrollWidth, setScrollWidth] = useState(0);
  // const gap = width / images.length;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1.5}}>
        <ScrollView
          style={{height: height / 2, width}}
          horizontal={true}
          scrollEventThrottle={16}
          onScroll={event => {
            // const x = event.nativeEvent.contentOffset.x;
            // setScrollWidth(x - (x % gap));
            // console.log(
            //   Math.floor(width / Math.abs(event.nativeEvent.contentOffset.x)) +
            //     ' ' +
            //     width,
            // );
            setScrollWidth(Math.abs(event.nativeEvent.contentOffset.x));
            console.log(scrollWidth + ' ' + width);
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
          <View
            style={{
              flex: 2,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {images.map((image, index, array) => {
              return (
                <PictureSwitch
                  key={image.id}
                  state={
                    // images.length -
                    //   width / Math.abs(index < 1 ? width : scrollWidth) >=
                    // index
                    scrollWidth > (index - 1 / 2) * width || index === 0
                  }
                />
              );
            })}
          </View>
          <View
            style={{
              flex: 7,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Text style={{color: '#CBFB5E', fontSize: 12}}>APP UI KIT</Text>
            <Text style={{color: '#FFFFFF', fontSize: 30}}>
              WELCOME TO GEEZ APP
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
              }}>
              Make your design workflow easier and save your time.
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={event => {}}>
            <Text style={{color: 'black', fontSize: 15}}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1.5,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    backgroundColor: '#CBFB5E',
  },
});

export default GetStarted;
