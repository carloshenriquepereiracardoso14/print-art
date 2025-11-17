import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { auth, db } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import styles from './style/LoginStyle';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      const snap = await getDoc(doc(db, "usuario", user.uid));

      if (!snap.exists()) {
        alert("Erro ao buscar dados do usuário.");
        return;
      }

      const data = snap.data();

      if (data.role === "admin") {
        navigation.replace("Admin", {
          email: data.email,
          nome: data.nome
        });
      } else {
        navigation.replace("ListarServicos", {
          email: data.email,
          nome: data.nome
        });
      }

    } catch (error) {
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contIcon}>
        <Text style={styles.text}><FontAwesome name="envelope-o" size={24} color="#fff" />    Email</Text>
      </View>

      <TextInput
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        placeholder='Email'
        placeholderTextColor={'#fff'}
      />

      <View style={styles.contIcon}>
        <Text style={styles.text}><FontAwesome name="lock" size={24} color="#fff" />    Senha</Text>
      </View>

      <TextInput
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor={'#fff'}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={login}
      >
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>

    </View>
  );
}