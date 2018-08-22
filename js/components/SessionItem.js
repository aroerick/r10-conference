import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

export const SessionItem = ({ item, onPress, styles }) => {
  return (
    <TouchableHighlight
      key={item.id}
      underlayColor={'#E6E6E6'}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.event}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableHighlight>
  )
}
