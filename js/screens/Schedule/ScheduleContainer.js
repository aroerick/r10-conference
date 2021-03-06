import React, { Component } from 'react'
import Schedule from './Schedule'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, ActivityIndicator } from 'react-native'
import { formatSessionData } from '../../lib/formatSessionData'
import PropTypes from 'prop-types'

export const ALL_SESSIONS_QUERY = gql`
  {
    allSessions {
      id
      title
      startTime
      location
      description
    }
  }
`
export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: 'Schedule',
  }
  sessionNav = id => {
    this.props.navigation.navigate('Session', { id: id })
  }
  render() {
    return (
      <Query query={ALL_SESSIONS_QUERY}>
        {({ data: { allSessions }, loading, error }) => {
          if (loading) return <ActivityIndicator size="large" />
          if (error) return <Text>Error :</Text>
          return (
            <Schedule
              data={formatSessionData(allSessions)}
              nav={id =>
                allSessions.find(session => session.id === id).description
                  ? this.sessionNav(id)
                  : null
              }
            />
          )
        }}
      </Query>
    )
  }
}

ScheduleContainer.propTypes = {
  navigation: PropTypes.object.isRequired
}
