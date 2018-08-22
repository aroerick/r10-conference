import React, { Component } from 'react'
import Favs from './Favs'
import FavsContext from '../../context/FavsContext'
import { Query } from 'react-apollo'
import { ALL_SESSIONS_QUERY } from '../Schedule/ScheduleContainer'

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
          if (loading) return <ActivityIndicator />
          if (error) return <Text>Error :</Text>
          return (
            <FavsContext.Consumer>
              {values => {
                const data = allSessions.filter(session => session.id === values.favIds)
                return <Favs data={data} nav={id => this.sessionNav(id)} />
              }}
            </FavsContext.Consumer>
          )
        }}
      </Query>
    )
  }
}
