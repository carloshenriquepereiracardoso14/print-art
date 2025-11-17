import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import styles from '../screens/styles/crud/HomeScreenStyle';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation, route }) {
  const [servicos, setServicos] = useState([]);
  const { email } = route.params;

  const carregarServicos = async () => {
    const querySnapshot = await getDocs(collection(db, 'servicos'));
    const lista = [];
    querySnapshot.forEach((doc) => {
      lista.push({ id: doc.id, ...doc.data() });
    });
    setServicos(lista);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarServicos);
    return unsubscribe;
  }, [navigation]);

  const deletarServico = async (id) => {
    await deleteDoc(doc(db, 'servicos', id));
    carregarServicos();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('AddServico')} style={styles.buttonAdd}>
          <Text style={styles.text}>
            Adicionar Serviço
          </Text>
          <MaterialIcons name="add" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ListaPedidosAdmin')} style={styles.buttonListat}>
          <MaterialIcons name="list" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={servicos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('EditServico', { userId: item.id })}
          >
            <View style={styles.contText}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.textCont}>Data prevista para Conclusão: {item.data}</Text>
              <Text style={styles.textCont}>Valor: R$ {item.valor}</Text>
            </View>

            <TouchableOpacity onPress={() => deletarServico(item.id)} style={styles.buttonDelet}>
              <Text style={styles.deletText}>Excluir </Text>
              <MaterialIcons name="delete" color="#fff" size={28} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}