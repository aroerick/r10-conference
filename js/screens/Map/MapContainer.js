import React, { Component } from 'react'
import Map from './Map'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, View, ActivityIndicator } from 'react-native'
import styles from './styles'

const Conducts = () => (
  <Query
    query={gql`
      {
        allConducts {
          id
          title
          description
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <ActivityIndicator size="large" />
      if (error) return <Text>Error :(</Text>

      return data.allConducts.map(({ title, description, id }) => (
        <View key={id}>
          <Text style={styles.title}>{`${title}`}</Text>
          <Text style={styles.bodyText}>{`${description}`}</Text>
        </View>
      ))
    }}
  </Query>
)

export default class MapContainer extends Component {
  static navigationOptions = {
    title: 'Map',
  }
  render() {
    return <Map Conducts={Conducts} />
  }
}
