import React from 'react'
import { Text, TouchableHighlight, View, Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FavsContext from '../context/FavsContext/'

export const SessionItem = ({ item, onPress, styles }) => {
  const iconName = Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'
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
        <FavsContext.Consumer>
          {values => {
            if (values.favIds.includes(item.id))
              return (
                <Ionicons
                  style={styles.fav}
                  name={iconName}
                  size={15}
                  color={'#cf392a'}
                />
              )
          }}
        </FavsContext.Consumer>
      </View>
    </TouchableHighlight>
  )
}
