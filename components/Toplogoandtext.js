import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

const Toplogoandtext = () => {
  return (
    <View>
      <View>
        <Image
          style={{
            height: 80,
            width: 170,
          }}
          source={require('../assets/ohologo.png')}
        ></Image>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 600,
            paddingRight: 5,
          }}
        >
          Host
        </Text>
        <Text
          style={{
            fontSize: 25,
            paddingRight: 5,
          }}
        >
          the
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          Perfect Date
        </Text>
      </View>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <Image
          style={{
            width: 240,
            height: 30,
          }}
          source={require('../assets/zig.png')}
        />
      </View>
    </View>
  );
};

export default Toplogoandtext;
