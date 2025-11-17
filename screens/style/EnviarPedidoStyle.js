import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#333',
        padding: 20,
        gap: 20
    },
    serviceName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        height: 60,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: '#444',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#666',
        color: '#fff'
    },

    contInfos: {
        flexDirection: 'column',
        gap: 10,
        marginBottom: 15,
        backgroundColor: '#3e5f8a',
        width: '100%',
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#666'
    },

    infos: {
        color: '#fff',
        fontSize: 18
    },

    buttonEnviar: {
        width: '100%',
        borderRadius: 12,
        height: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    }

});