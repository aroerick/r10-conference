import React from "react";
import { Text, View, ScrollView } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styles from './styles'

const ConductDesc = () => (
<View>
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

      // return <Text>{data.Conduct.title}</Text>
      return data.allConducts.map(({title, description}) => (
        <View>
          <Text style={styles.title}>{`${title}`}</Text>
          <Text>{`${description}`}</Text>
        </View>
      ))
    }}
  </Query>
  </View>
);

const About = () => {
  return (
    <ScrollView>
      <Text>R10 is a conference that focuses n just about any topic related to dev.</Text>
      <Text style={styles.header}>Date & Venue</Text>
      <Text>The R10 conference will take place on Tuesday, August 28, 2018 in Vancouver, BC.</Text>
      <Text style={styles.header}>Code of Conduct</Text>
      <ConductDesc />
    </ScrollView>
  );
};

export default About;
