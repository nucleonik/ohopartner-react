import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const MainContainer = () => {
  const tab = createBottomTabNavigator();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
        paddingLeft: 25,
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
    >
      <Text>Main container</Text>
    </SafeAreaView>
  );
};

export default MainContainer;
