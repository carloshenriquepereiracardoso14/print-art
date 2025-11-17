import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { 
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#1e1e1e'
  },

  input: { 
    marginBottom: 15,
    padding: 8,
    width: '100%',
    maxWidth: 350,
    height: 60,
    backgroundColor: '#333',
    borderRadius: 12,
    color: '#fff',
    underlineColorAndroid:"transparent",
  }, 

  button: {
    height: 60,
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#32CD32',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 15
  },

  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
  },

  logo:{
    width: '100%',
    maxWidth: 150,
    marginBottom: 20,
  }
})