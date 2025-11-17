import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text } from 'react-native';
import { db } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import styles from '../screens/styles/crud/EditServicoScreenStyle'; 
import { MaterialIcons } from '@expo/vector-icons';

export default function EditServicoScreen({ route, navigation }) {
  const { userId } = route.params;
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [valor, setValor] = useState('');

  useEffect(() => {
    const carregarDados = async () => {
      const docRef = doc(db, 'servicos', userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setNome(data.nome);
        setData(data.data);
        setValor(data.valor.toString());
      }
    };

    carregarDados();
  }, []);

  const salvarAlteracoes = async () => {
    try {
      const docRef = doc(db, 'servicos', userId);
      await updateDoc(docRef, { nome, data, valor: parseInt(valor) });
      Alert.alert('Sucesso', 'Serviço atualizado!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível atualizar.');
    }
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="edit" color="#fff" size={80} style={{ marginBottom: 55, marginTop: 35 }} />
      <TextInput placeholderTextColor={"#fff"} style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome" />
      <TextInput placeholderTextColor={"#fff"} style={styles.input} value={data} onChangeText={setData} placeholder="data" />
      <TextInput placeholderTextColor={"#fff"} style={styles.input} value={valor} onChangeText={setValor} keyboardType="numeric" placeholder="Valor" />
      <TouchableOpacity style={styles.button} onPress={salvarAlteracoes}>
        <Text style={styles.buttonText}>
          Salvar alterações
        </Text>      
        <MaterialIcons name="edit" color="#fff" size={28} />
      </TouchableOpacity>
    </View>
  );
}