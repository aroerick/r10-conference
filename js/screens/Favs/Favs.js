import React from "react";
import { Text, ScrollView } from "react-native";
import styles from './styles'

const Favs = ({ favIds, getFavs }) => {
  return (
    <ScrollView style={styles.container}>
      <Text>FAVS</Text>
    </ScrollView>
  );
};

export default Favs;
