import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#1e1e1e',
        paddingTop: 100
    },

    button: {
        backgroundColor: '#3e5f8a',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 25,
        marginBottom: 15,
        padding: 10,
        flexDirection: 'row',
        position: 'absolute',
        right: 20,
        top: 20
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },

    text: {
        fontSize: 20,
        marginBottom: 20,
        color: '#fff',
    },

    textInput: {
        backgroundColor: '#333',
        padding: 10,
        marginBottom: 15,
        color: '#fff',
        fontSize: 16,
        height: 60,
        width: '100%',
        borderRadius: 14,
        marginTop: 20
    },

    buttonAlterar:{
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        backgroundColor: '#3e5f8a',
        marginTop: 30
    }

});