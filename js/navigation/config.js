import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Header } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'

const GradientHeader = props => (
  <View style={{ backgroundColor: 'white', overflow: 'hidden' }}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: '100%' }]}
    />
    <Header {...props} />
  </View>
)

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontFamily: 'Montserrat-Light',
  },
})
export const darkNavigationOptions = navigation => ({
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: 'black',
    height: 78,
    shadowColor: 'transparent',
    elevation: 0,
    borderBottomWidth: 0,
  },
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Ionicons
        style={{ marginLeft: 10}}
        name="md-close"
        size={25}
        color="white"
      />
    </TouchableOpacity>
  ),
  headerTintColor: 'white',
  headerTitleStyle: {
    fontFamily: 'Montserrat-Light',
    width: 200,
  },
})
