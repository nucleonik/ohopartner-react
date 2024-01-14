import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReservationScreen from '../navigation/screens/ReservationScreen';
import AnalyticsScreen from '../navigation/screens/AnalyticsScreen';
import SettingsScreen from '../navigation/screens/SettingsScreen';
// const ReservationPage = 'Reservation';
// const AnalyticsPage = 'Analytics';
// const SettingsPage = 'Settings';
const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#B42254',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Reservations"
        component={ReservationScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? '#B42254' : 'black',
                  width: focused ? 28 : 24,
                  height: focused ? 28 : 24,
                }}
                source={require('../assets/reservationiconfocused.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? '#B42254' : 'black',
                  width: focused ? 28 : 24,
                  height: focused ? 28 : 24,
                }}
                source={require('../assets/analyticsiconfocused.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? '#B42254' : 'black',
                  width: focused ? 28 : 24,
                  height: focused ? 28 : 24,
                }}
                source={require('../assets/settingsiconfocused.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainContainer;
