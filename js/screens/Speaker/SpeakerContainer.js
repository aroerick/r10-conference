import React, { Component } from 'react'
import SpeakerSingle from './Speaker'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, ActivityIndicator } from 'react-native'

const SPEAKER_QUERY = gql`
  query Speaker($id: ID!) {
    Speaker(id: $id) {
      id
      name
      image
      bio
      url
    }
  }
`
export default class SpeakerContainer extends Component {
  static navigationOptions = {
    title: 'About the Speaker',
  }
  render() {
    return (
      <Query
        query={SPEAKER_QUERY}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ data: {Speaker}, loading, error }) => {
          if (loading) return <ActivityIndicator size="large" />
          if (error) return <Text>Error :{error.message}</Text>
          return (
            <SpeakerSingle
              data={Speaker}
              nav={this.props.navigation}
            />
          )
        }}
      </Query>
    )
  }
}
