import React, { Component } from "react";
import client from './config/api'
import { ApolloProvider } from "react-apollo";
import RootStackNavigator from './navigation/RootStackNavigation'

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
