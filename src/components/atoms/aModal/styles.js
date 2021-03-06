import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#f7f7f7',
    padding: 48,
  },
  infoIcon: {
    marginLeft: 20,
    marginBottom: -24,
    zIndex: 1
  },
  textStyle: {
    color: '#3fbdf1',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 15,
  },
  description: {
    marginBottom: 30,
    color: 'gray',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1.4,
  },
  time: {
    marginBottom: 30,
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: 1.4,
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default styles
