import React from 'react'
import { Text, View, ScrollView, SectionList, TouchableHighlight } from 'react-native'
import styles from './styles'
import moment from 'moment'
import { withNavigation } from 'react-navigation';

const Schedule = ({ data, nav }) => {
  return (
    <ScrollView style={styles.container}>
      <SectionList
        renderItem={({ item }) => (
          <TouchableHighlight key={item.id} underlayColor={'#E6E6E6'} activeOpacity={0.7} onPress={() => nav(item.id)}>
            <View style={styles.event}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </TouchableHighlight>
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
