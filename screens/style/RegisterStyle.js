import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    gap: 30,
    padding: 15,
    justifyContent: 'flex-start',
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    paddingTop: 50
  },

  input: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#333',
    height: 60,
    borderRadius: 10,
    padding: 10,
    maxWidth: 300,
    color: '#fff'
  },

  button: {
    width: '100%',
    maxWidth: 300,
    height: 60,
    backgroundColor: '#32f132ff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
  },

  text: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 18,
  },

  contIcon: {
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: 40
  }

});