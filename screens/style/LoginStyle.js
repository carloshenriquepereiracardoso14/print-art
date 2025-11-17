import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container:{
        gap: 30,
        padding:20,
        justifyContent: 'flex-start',
        flex:1,
        backgroundColor: '#1e1e1e',
        paddingTop: 50
    },

    text:{
        color: '#fff',
        fontWeight: 500,
        fontSize: 18,
    },

    input:{
        width:'100%',
        maxWidth: 350,
        backgroundColor: '#333',
        height: 60,
        borderRadius: 10,
        padding: 15,
        fontWeight: 500,
        fontSize: 16,
        color: '#fff'
    },

    button: {
        width: '100%',    
        maxWidth: 350,   
        height: 60,         
        backgroundColor: '#3e5f8a',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    buttonText:{
        color:'#fff',
        fontSize: 20,
        fontWeight: 500, 
    },

    contIcon:{
        width: '100%',
        alignItems: 'flex-start'
    }

})