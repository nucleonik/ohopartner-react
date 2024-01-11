import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Signinbutton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Reservation')}>
      <View
        style={{
          justifyContent: 'flex-start',
        }}
      >
        <LinearGradient
          colors={['rgba(196, 35, 83, 100)', 'rgba(25, 4, 10, 100)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.05, 1.1771]}
          style={{
            marginTop: 40,
            height: 60,
            width: 340,
            borderRadius: 22,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.signInText}>Sign in</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  signInText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
export default Signinbutton;
