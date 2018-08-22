import React from 'react'
import { Text, View } from 'react-native'
import moment from 'moment'

const SessionSingle = ({ data }) => {
    return (
      <View>
        <Text>{data.title}</Text>
        <Text>{data.location}</Text>
        <Text>{data.speaker.name}</Text>
        <Text>{moment(data.startTime).format('h:mm A')}</Text>
      </View>
    )

}

export default SessionSingle