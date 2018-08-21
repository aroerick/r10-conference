import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "./screens/About/";
import client from './config/api'
import { ApolloProvider } from "react-apollo";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <AboutScreen />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
