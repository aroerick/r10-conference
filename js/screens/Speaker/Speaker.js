import React from 'react'
import styles from './styles'
import { Text, View, Linking, Image, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const SpeakerSingle = ({ data }) => {
  readMore = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url)
        } else {
          return Linking.openURL(url)
        }
      })
      .catch(err => console.error('An error occurred', err))
  }

  return (
    <View style={styles.background}>
    <ScrollView style={styles.container}> 
      <Image style={styles.image} source={{ uri: data.image }} />
      <Text  style={styles.header}>{data.name}</Text>
      <Text style={styles.body}>{data.bio}</Text>
      <TouchableOpacity
        title="Read More"
        onPress={() => this.readMore(data.url)}
      >
        <LinearGradient
          style={styles.button}
          colors={['#8797D6', '#9963ea']}
          start={{ x: 1.0, y: 1.0 }}
          end={{ x: 0.0, y: 0.0 }}
        >
          <Text style={styles.buttonText}>Read More on Wikipedia</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

export default SpeakerSingle
