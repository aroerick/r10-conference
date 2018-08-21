import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import styles from './styles'

const logo = require('../../assets/images/r10_logo.png')

const Schedule = ({ Conducts }) => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={logo}/>
      <Text>R10 is a conference that focuses n just Schedule any topic related to dev.</Text>
      <Text style={styles.header}>Date & Venue</Text>
      <Text>The R10 conference will take place on Tuesday, August 28, 2018 in Vancouver, BC.</Text>
      <Text style={styles.header}>Code of Conduct</Text>
      <Conducts />
    </ScrollView>
  );
};

export default Schedule;
