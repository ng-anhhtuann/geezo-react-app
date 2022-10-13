/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: width * 0.075,
            marginRight: width * 0.075,
            marginTop: height * 0.01,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: height * 0.05,
              color: 'white',
              flex: 9,
            }}>
            Geezo
          </Text>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              /*search something (?)*/
            }}>
            <Image
              source={require('../assets/searchicon.png')}
              resizeMode="contain"
              style={{flex: 1}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: width * 0.075,
            marginRight: width * 0.075,
            marginTop: height * 0.05,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: height * 0.025,
              color: 'white',
              flex: 8,
            }}>
            New Albums
          </Text>
          <TouchableOpacity
            style={{
              flex: 2,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              /*search something (?)*/
            }}>
            <Text style={{color: 'white', fontSize: height * 0.015}}>
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          style={{flex: 1, marginTop: height * 0.025}}
          //   scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          justifyContent="center"
          alignItems="center"
          onScroll={event => {}}>
          <Image
            source={require('../assets/picture0.png')}
            alignSelf={'center'}
          />
          <Image
            source={require('../assets/picture1.png')}
            style={{marginLeft: width * 0.05, marginRight: width * 0.05}}
            alignSelf={'center'}
          />
          <Image
            source={require('../assets/picture2.png')}
            alignSelf={'center'}
          />
        </ScrollView>
        <Text
          style={{
            color: 'white',
            fontSize: height * 0.025,
            marginLeft: width * 0.075,
            marginRight: width * 0.075,
            marginTop: height * 0.025,
            flex: 1,
          }}>
          Geezo Weekly
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            marginLeft: width * 0.075,
            marginRight: width * 0.075,
            height: height * 0.226,
            width: width * 0.85,
            marginTop: height * 0.025,
          }}>
          <Image
            source={require('../assets/weekrcm.png')}
            style={{width: '100%', height: '100%'}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: height * 0.025,
            marginLeft: width * 0.075,
            marginRight: width * 0.075,
            marginTop: height * 0.025,
            flex: 1,
          }}>
          Recently Music
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
