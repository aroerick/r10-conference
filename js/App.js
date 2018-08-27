import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import client from './config/api'
import { ApolloProvider } from 'react-apollo'
import RootStackNavigator from './navigation/RootStackNavigation'
import { FavsProvider } from './context/FavsContext'
export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavsProvider>
          <StatusBar barStyle="light-content" />
          <RootStackNavigator />
        </FavsProvider>
      </ApolloProvider>
    )
  }
}
