import React from 'react'
import { Image, Text, View } from 'react-native'

const NoReservation = () => {
  return (
    <View
    style={{
        marginTop: 60,
        alignItems: 'center',
    }}>
        <Text
        style={{
            fontSize: 25,
            fontWeight: 600,
        }}>
            No Reservation Yet
        </Text>
        <Text
        style={{
            textAlign:'center',
            width: 360,
            marginTop: 25,
            fontSize: 18,
            marginBottom: 30,
            lineHeight: 28,
            fontWeight: 400,
            
        }}>
            On the this screen, you'll have acces to a comprehensive list of all upcoming weekend reservations for your restaurant.
        </Text>
        <Image source={require('../assets/noreservation.png')}/>
    </View>
  )
}

export default NoReservation