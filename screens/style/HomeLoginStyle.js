import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    gap: 35,
    backgroundColor: '#1e1e1e'
  },

  button: {
    width: '100%', 
    maxWidth: 350,      
    height: 60,         
    backgroundColor: '#3e5f8a',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 15,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 500,
  },

  text: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 500,
  },

  image:{
    maxWidth: 250,
    maxHeight: 250,
    alignItems: 'center',
    justifyContent: 'center',
  }
});