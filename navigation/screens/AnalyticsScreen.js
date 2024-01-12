import React from 'react';
import { Text, View } from 'react-native';

const AnalyticsScreen = ({navigation}) => {
  return (
    <View>
      <Text
      onPress={()=>navigation.navigate('Reservation')}
      >Analytics</Text>
    </View>
  );
};

export default AnalyticsScreen;
