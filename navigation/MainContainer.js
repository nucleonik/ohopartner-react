import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReservationScreen from '../navigation/screens/ReservationScreen'
import AnalyticsScreen from '../navigation/screens/AnalyticsScreen'
import SettingsScreen from '../navigation/screens/SettingsScreen'
// const ReservationPage = 'Reservation';
// const AnalyticsPage = 'Analytics';
// const SettingsPage = 'Settings';
const Tab = createBottomTabNavigator();

const MainContainer = () => {
  
  return (
    
      <Tab.Navigator>
        <Tab.Screen name='Reservations' component={ReservationScreen}/>
        <Tab.Screen name='Analytics' component={AnalyticsScreen}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>
      </Tab.Navigator>
    
      
   
  );
};

export default MainContainer;
