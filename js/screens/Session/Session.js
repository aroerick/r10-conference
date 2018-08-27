import React from 'react'
import { Text, ScrollView, View, Image, TouchableOpacity, Platform } from 'react-native'
import moment from 'moment'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

const SessionSingle = ({ data, addFav, removeFav, favIds, nav }) => {
const iconName = Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'
  return (
    <ScrollView style={styles.container}>
      {favIds.includes(data.id) ? (
        <Ionicons
          style={styles.fav}
          name={iconName}
          size={15}
          color={'#cf392a'}
        />
      ) : null}
      <Text style={styles.secondary}>{data.location}</Text>
      <Text style={styles.primary}>{data.title}</Text>
      <Text style={styles.time}>{moment(data.startTime).format('h:mm A')}</Text>
      <Text style={styles.body}>{data.description}</Text>
      <View style={styles.speaker}>
        <Text style={styles.secondary}>Presented by:</Text>
        <Image style={styles.image} source={{ uri: data.speaker.image }} />
        <TouchableOpacity onPress={() => nav.navigate('Speaker', { id: data.speaker.id })}>
          <Text style={styles.caption}>{data.speaker.name}</Text>
        </TouchableOpacity>
      </View>
      {!favIds.includes(data.id) ? (
        <TouchableOpacity title="Add to Favs" onPress={() => addFav(data.id)}>
          <LinearGradient
            style={styles.button}
            colors={['#8797D6', '#9963ea']}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
          >
            <Text style={styles.buttonText}>Add to Favs</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          title="Remove from Favs"
          onPress={() => removeFav(data.id)}
        >
          <LinearGradient
            style={styles.button}
            colors={['#8797D6', '#9963ea']}
            start={{ x: 1.0, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
          >
            <Text style={styles.buttonText}>Remove from Favs</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </ScrollView>
  )
}

SessionSingle.propTypes = {
  data: PropTypes.object.isRequired,
  addFav: PropTypes.func.isRequired,
  removeFav: PropTypes.func.isRequired,
  favIds: PropTypes.array.isRequired,
  nav: PropTypes.object.isRequired
}

export default SessionSingle
