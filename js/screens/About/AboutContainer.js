import React, { Component } from 'react'
import About from './About'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

const ALL_CONDUCTS_QUERY = gql`
  {
    allConducts {
      id
      title
      description
    }
  }
`
export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
  }
  render() {
    return (
      <Query query={ALL_CONDUCTS_QUERY}>
        {({ data: { allConducts }, loading, error }) => {
          if (loading) return <ActivityIndicator size="large"/>
          if (error) return <Text>Error :</Text>
          return <About data={allConducts} />
        }}
      </Query>
    )
  }
}
