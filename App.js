import React, { useState, useEffect } from 'react';
import Authentication from './components/pages/Authentication';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainContainer from './navigation/MainContainer';


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const ReservationPage = 'Reservation';
const AnalyticsPage = 'Analytics';
const SettingsPage = 'Settings';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
