import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1e1e1e'
    },

    item: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        gap: 20,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },

    nome: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff'
    },

    contButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },

    buttonAdd: {
        backgroundColor: '#32CD32',
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
        flexDirection: 'row'
    },

    buttonLogout: {
        backgroundColor: '#3e5f8a',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: '50%',
        marginBottom: 15,
        padding: 10,
        flexDirection: 'row'
    },

    buttonListat: {
        backgroundColor: '#3e5f8a',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 12,
        marginBottom: 15,
        padding: 10,
        flexDirection: 'row'
    },

    text: {
        color: '#fff',
        fontWeight: 500,
        fontSize: 14,
    },

    contText: {
        gap: 10,
    },

    buttonDelet: {
        backgroundColor: '#ff0000ff',
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        flexDirection: 'row'
    },

    deletText: {
        color: '#fff',
        fontWeight: 500,
        fontSize: 16,
    },

    textCont: {
        fontSize: 16,
        fontWeight: 400,
        color: '#fff',
    },
});