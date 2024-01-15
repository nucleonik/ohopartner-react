import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import More from './More';
import AllmyOutlets from './AllmyOutlets';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings Screen"
        component={More}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="All My Outlets"
        component={AllmyOutlets}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SettingsScreen;
