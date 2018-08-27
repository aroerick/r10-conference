import React, { Component } from 'react'
import Favs from './Favs'
import FavsContext from '../../context/FavsContext/'
import { Query } from 'react-apollo'
import { ALL_SESSIONS_QUERY } from '../Schedule/ScheduleContainer'
import { Text, ActivityIndicator } from 'react-native'

export default class FavsContainer extends Component {
  static navigationOptions = {
    title: 'Favs',
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
            <FavsContext.Consumer>
              {values => {
                return <Favs data={allSessions} favIds={values.favIds} nav={id => this.sessionNav(id)} />
              }}
            </FavsContext.Consumer>
          )
        }}
      </Query>
    )
  }
}
