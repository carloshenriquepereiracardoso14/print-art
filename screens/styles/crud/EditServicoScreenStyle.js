import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20,
        backgroundColor: '#1e1e1e',
        alignItems: 'center'
    },

    input: { 
        marginBottom: 20,
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
        flexDirection: 'row',
        gap: 12,
        marginTop: 25
    },

    buttonText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 500,
    },

});