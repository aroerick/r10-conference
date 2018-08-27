import React, { Component } from 'react'
import Map from './Map'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, View, ActivityIndicator } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

export default class MapContainer extends Component {
  static navigationOptions = {
    title: 'Map',
  }
  render() {
    return <Map />
  }
}
