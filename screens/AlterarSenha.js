import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './style/AlterarSenhaStyle';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../firebaseConfig';
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

export default function AlterarSenha({ navigation, route }) {
    const { email, nome } = route.params;
    const [senhaAtual, setSenhaAtual] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    const logout = () => {
        navigation.replace("Home");
    };

    const alterarSenha = async () => {
        try {
            const user = auth.currentUser;

            if (!user) {
                Alert.alert("Erro", "Nenhum usuário logado!");
                return;
            }

            // Reautenticar para poder trocar senha
            const credential = EmailAuthProvider.credential(
                email,
                senhaAtual
            );

            await reauthenticateWithCredential(user, credential);

            await updatePassword(user, novaSenha);

            Alert.alert("Sucesso", "Senha alterada com sucesso!");
            navigation.goBack();
        } catch (error) {
            Alert.alert("Erro", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={logout}
            >
                <Text style={styles.buttonText}><FontAwesome name="power-off" size={18} /></Text>
            </TouchableOpacity>

            <Text style={styles.text}>Email: {email}</Text>
            <Text style={styles.text}>Nome: {nome}</Text>

            <TextInput
                placeholder="Senha atual"
                secureTextEntry
                onChangeText={setSenhaAtual}
                style={styles.textInput}
                placeholderTextColor={'#fff'}
            />

            <TextInput
                placeholder="Nova senha"
                secureTextEntry
                onChangeText={setNovaSenha}
                style={styles.textInput}
                placeholderTextColor={'#fff'}
            />

            <TouchableOpacity
                onPress={alterarSenha}
                style={styles.buttonAlterar}
            >
                <Text style={styles.buttonText}>Confirmar alteração</Text>
            </TouchableOpacity>
        </View>
    );
}
