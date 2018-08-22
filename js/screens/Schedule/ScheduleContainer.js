import React, { Component } from 'react'
import Schedule from './Schedule'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Text, ActivityIndicator } from 'react-native'
import { formatSessionData } from '../../lib/formatSessionData'

const SCHEDULE_QUERY = gql`
  {
    allSessions {
      id
      title
      startTime
      location
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
      <Query query={SCHEDULE_QUERY}>
        {({ data: { allSessions }, loading, error }) => {
          if (loading) return <ActivityIndicator />
          if (error) return <Text>Error :</Text>
          return <Schedule data={formatSessionData(allSessions)} nav={id => {this.sessionNav(id)}}/>
        }}
      </Query>
    )
  }
}
