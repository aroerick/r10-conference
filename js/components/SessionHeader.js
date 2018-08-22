import React from 'react'
import moment from 'moment'
import { Text } from 'react-native'

export const SessionHeader = ({ title, styles }) => {
  return <Text style={styles}>{moment(title).format('h:mm A')}</Text>
}
