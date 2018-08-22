import React, { Component } from 'react'
import client from './config/api'
import { ApolloProvider } from 'react-apollo'
import RootStackNavigator from './navigation/RootStackNavigation'
import { FavsProvider } from './context/FavsContext'

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavsProvider>
          <RootStackNavigator />
        </FavsProvider>
      </ApolloProvider>
    )
  }
}
