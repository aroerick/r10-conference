import React, { Component } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import gql from 'graphql-tag'
import SessionSingle from './Session'
import { Query } from 'react-apollo'

const SESSION_QUERY = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      title
      location
      startTime
      speaker {
        name
        bio
      }
    }
  }
`

export default class SessionContainer extends Component {
  render() {
    return (
      <Query
        query={SESSION_QUERY}
        variables={{id: this.props.navigation.getParam('id')}}
      >
        {({ data: { Session }, loading, error }) => {
          if (loading) return <ActivityIndicator />
          if (error) return <Text>Error :</Text>
          return <SessionSingle data={Session} />
        }}
      </Query>
    )
  }
}
