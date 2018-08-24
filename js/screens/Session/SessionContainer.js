import React, { Component } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import gql from 'graphql-tag'
import SessionSingle from './Session'
import { Query } from 'react-apollo'
import FavsContext from '../../context/FavsContext'

const SESSION_QUERY = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      id
      title
      location
      description
      startTime
      speaker {
        name
        bio
        image
      }
    }
  }
`

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  }
  render() {
    return (
      <Query
        query={SESSION_QUERY}
        variables={{ id: this.props.navigation.getParam('id') }}
      >
        {({ data: { Session }, loading, error }) => {
          if (loading) return <ActivityIndicator />
          if (error) return <Text>Error :</Text>
          return (
            <FavsContext.Consumer>
              {values => {
                return <SessionSingle data={Session} addFav={values.addFav} removeFav={values.removeFav} favIds={values.favIds}/>
              }}
            </FavsContext.Consumer>
          )
        }}
      </Query>
    )
  }
}
