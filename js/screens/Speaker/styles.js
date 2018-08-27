import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    paddingTop: 2,
    height: '100%'
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderWidth: 0,
  },
  body: {
    fontFamily: 'Montserrat-Light',
    paddingVertical: 6,
    fontSize: 14,
    lineHeight: 24,
  },
  header: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    paddingVertical: 16,
    alignSelf: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#8797D6',
    marginVertical: 24,
    paddingVertical: 8,
    borderRadius: 24,
    width: 225,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
})

export default styles
