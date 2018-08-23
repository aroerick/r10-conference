import React from 'react'
import { Text, View, Button } from 'react-native'
import moment from 'moment'

const SessionSingle = ({ data, addFav, removeFav }) => {
    return (
      <View>
        <Text>{data.title}</Text>
        <Text>{data.location}</Text>
        <Text>{data.speaker.name}</Text>
        <Text>{moment(data.startTime).format('h:mm A')}</Text>
        <Button title="Add to Favs" onPress={() => addFav(data.id)}/>
        <Button title="Remove from Favs" onPress={() => removeFav(data.id)}/>
      </View>
    )

}

export default SessionSingle