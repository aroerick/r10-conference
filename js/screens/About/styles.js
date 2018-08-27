import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
  image: {
    alignSelf: 'center',
    marginVertical: 12,
  },
  header: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    marginVertical: 16,
  },
  content: {
    paddingVertical: 12,
    marginVertical: 8,
    borderTopColor: '#e6e6e6',
    borderTopWidth: 1,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingRight: 12,
  },
  title: {
    color: '#9963EA',
    fontFamily: 'Montserrat-Regular',
    marginBottom: 16,
  },
  bodyText: {
    fontFamily: 'Montserrat-Light',
  },
})

export default styles
