import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  body: {
    fontFamily: 'Montserrat-Light',
    paddingVertical: 6,
    fontSize: 16,
    lineHeight: 24,
  },
  time: {
    fontSize: 14,
    color: '#cf392a',
    fontFamily: 'Montserrat-Regular',
    paddingVertical: 8,
  },
  primary: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    paddingBottom: 6,
  },
  secondary: {
    fontFamily: 'Montserrat-Regular',
    color: '#999',
    width: '100%',
    paddingBottom: 10,
  },
  speaker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    paddingVertical: 15,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  caption: {
    paddingLeft: 20,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    backgroundColor: '#8797D6',
    marginVertical: 24,
    paddingVertical: 8,
    borderRadius: 24,
    width: 175,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default styles
