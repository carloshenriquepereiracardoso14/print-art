import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        padding: 10,
    },

    serviceItem: {
        backgroundColor: '#444',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        gap: 10,
    },

    serviceName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },

    selectButton: {
        backgroundColor: '#3e5f8a',
        padding: 10,
        borderRadius: 12,
        marginTop: 10,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

    selectButtonText: {
        color: '#fff',
        textAlign: 'center',
    },

    servicoText: {
        color: '#f2f2f2',
        fontSize: 16
    },

    contTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#3e5f8a',
        padding: 10,
        borderRadius: 10,
        gap: 10,
    },

    buttonListaPedidos:{
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }

});