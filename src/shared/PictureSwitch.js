/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
const PictureSwitch = state => {
  console.log(state.state);
  return (
    <View
      style={{
        width: 8,
        height: 8,
        backgroundColor: state.state ? '#CBFB5E' : '#71737B',
        marginHorizontal: 4,
      }}
    />
  );
};
export default PictureSwitch;
