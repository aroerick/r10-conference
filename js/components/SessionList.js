import React from 'react'
import { ScrollView, SectionList } from 'react-native'
import { SessionHeader } from './SessionHeader'
import { SessionItem } from './SessionItem'

export const SessionList = ({ data, styles, nav }) => {
  return (
    <ScrollView style={styles.container}>
      <SectionList
        renderItem={({ item }) => (
          <SessionItem
            item={item}
            onPress={() => nav(item.id)}
            styles={styles}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SessionHeader styles={styles.header} title={title} />
        )}
        sections={data}
        keyExtractor={(item, index) => item + index}
      />
    </ScrollView>
  )
}
