import React from 'react'
import { Text, View } from 'react-native'

const SettingsScreen = (navigation) => {
  return (
    <View>
        <Text
        onPress={()=>navigation.navigate('Reservation')}>
            Settings
        </Text>
    </View>
  )
}

export default SettingsScreen