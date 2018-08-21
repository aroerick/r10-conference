import React from 'react'
import {
  Text,
  View,
  ScrollView,
  SectionList,
} from 'react-native'
import styles from './styles'
import moment from 'moment'

const Schedule = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      <SectionList
        renderItem={({ item }) => (
          // <TouchableHighlight underlayColor={'#AA523A'} activeOpacity={.3}>
            <View style={styles.event}key={item.id}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          // </TouchableHighlight>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{moment(title).format('h:mm A')}</Text>
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  )
}

export default Schedule
