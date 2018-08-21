import React from 'react'
import { Text, View, ScrollView, SectionList } from 'react-native'
import styles from './styles'

const Schedule = ({ data }) => {
  console.log(data)
  return (
    <ScrollView style={styles.container}>
      <SectionList
        renderItem={({ item }) => (
          <View key={item.id}>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  )
}

export default Schedule
