import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import styles from './style/RegisterStyle';
import { FontAwesome } from '@expo/vector-icons';

export default function RegistrarScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [nome, setNome] = useState('');

  const registrar = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await setDoc(doc(db, "usuario", user.uid), {
        email,
        telefone,
        nome,
        role: "cliente"
      });

      alert("Conta criada com sucesso!");
      navigation.navigate("Login");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contIcon}>
        <Text style={styles.text}><FontAwesome name="envelope-o" size={24} color="#fff" />   Email</Text>
      </View>

      <TextInput onChangeText={setEmail} value={email} style={styles.input} />

      <View style={styles.contIcon}>
        <Text style={styles.text}><FontAwesome name="user" size={24} color="#fff" />   Nome Completo</Text>
      </View>

      <TextInput onChangeText={setNome} value={nome} style={styles.input} />

      <View style={styles.contIcon}>
        <Text style={styles.text}><FontAwesome name="lock" size={24} color="#fff" />   Senha</Text>
      </View>

      <TextInput secureTextEntry onChangeText={setSenha} value={senha} style={styles.input} />

      <View style={styles.contIcon}>
        <Text style={styles.text}><FontAwesome name="mobile-phone" size={28} />   Telefone</Text>
      </View>

      <TextInput onChangeText={setTelefone} value={telefone} style={styles.input} />

      <TouchableOpacity
        style={styles.button}
        onPress={registrar}
      >
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}