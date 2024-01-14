import React, { useState, useEffect } from 'react';
import Authentication from './components/pages/Authentication';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainContainer from './navigation/MainContainer';
import Terms from './navigation/screens/Terms';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Authentication}
          options={({ navigation }) => ({
            title: 'Authentication',
            headerShown: false,
            backgroundColor: '#ffffff',
          })}
        />
        <Stack.Screen
          name="Reservation"
          component={MainContainer}
          options={({ navigation }) => ({
            title: 'Home',
            headerShown: false,
            backgroundColor: '#ffffff',
          })}
        />
        <Stack.Screen name="Terms" component={Terms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
