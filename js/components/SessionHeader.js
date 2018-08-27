import React from 'react'
import moment from 'moment'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

export const SessionHeader = ({ title, styles }) => {
  return <Text style={styles}>{moment(title).format('h:mm A')}</Text>
}
SessionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
}