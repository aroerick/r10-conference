import React from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import ConductItem from '../../components/ConductItem'
import styles from './styles'
import PropTypes from 'prop-types'

const logo = require('../../assets/images/r10_logo.png')

const About = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={logo} />
      <View style={styles.content}>
        <Text style={styles.bodyText}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.header}>Date & Venue</Text>
        <Text style={styles.bodyText}>
          The R10 conference will take place on Tuesday, August 28, 2018 in
          Vancouver, BC.
        </Text>
        <Text style={styles.header}>Code of Conduct</Text>
        {data.map(data => (
          <ConductItem data={data} styles={styles} key={data.id} />
        ))}
      </View>
      <Text style={styles.bodyText}>&copy; RED Academy 2018</Text>
    </ScrollView>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired
}

export default About
