import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#E6E6E6',
    fontFamily: 'Montserrat-Regular',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  event: {
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    paddingBottom: 6,
  },
  location: {
    fontFamily: 'Montserrat-Regular',
    color: '#999',
  },
  fav: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  }
})

export default styles
