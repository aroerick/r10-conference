import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, View } from "react-native";
import styles from './styles'

const Conducts = () => (
  <Query
    query={gql`
      {
        allConducts {
          title
          description
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

      return data.allConducts.map(({title, description}) => (
        <View>
          <Text style={styles.title}>{`${title}`}</Text>
          <Text>{`${description}`}</Text>
        </View>
      ))
    }}
  </Query>
);

export default class ScheduleContainer extends Component {
  render() {
    return (
        <Schedule Conducts={Conducts} />
    );
  }
}
