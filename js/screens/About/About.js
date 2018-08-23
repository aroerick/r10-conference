import React from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import styles from './styles'

const logo = require('../../assets/images/r10_logo.png')

const About = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={logo} />
      <Text style={styles.bodyText}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.header}>Date & Venue</Text>
      <Text style={styles.bodyText}>
        The R10 conference will take place on Tuesday, August 28, 2018 in
        Vancouver, BC.
      </Text>
      <Text style={styles.header}>Code of Conduct</Text>
      {data.map(({ title, description, id }) => (
        <View key={id}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.bodyText}>{description}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default About
