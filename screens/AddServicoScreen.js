import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text, Image } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import styles from '../screens/styles/crud/AddServicoScreenStyle'; 

export default function AddServicoScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [valor, setValor] = useState('');

  const adicionarServico = async () => {
    if (!nome || !data || !valor) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    try {
      await addDoc(collection(db, 'servicos'), { nome, data, valor: parseInt(valor) });
      Alert.alert('Sucesso', 'Serviço adicionado!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível adicionar o serviço.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/upload.png')}
        style={ styles.logo }
        resizeMode="contain"
      />
      <TextInput placeholderTextColor={"#fff"} placeholder="Nome do serviço" style={styles.input} onChangeText={setNome} value={nome} />
      <TextInput placeholderTextColor={"#fff"} placeholder="Data prevista de conclusão" style={styles.input} onChangeText={setData} value={data} />
      <TextInput placeholderTextColor={"#fff"} placeholder="Valor R$" style={styles.input} onChangeText={setValor} value={valor} keyboardType="numeric" />
      <TouchableOpacity style={styles.button} onPress={adicionarServico}>
        <Text style={styles.buttonText}>
          Cadastrar Serviço
        </Text>
      </TouchableOpacity>
    </View>
  );
}