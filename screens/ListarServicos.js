import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getDocs, getDoc, doc, collection } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import styles from './style/ListaServicosStyle';
import { FontAwesome } from '@expo/vector-icons';

const ListarServicoTela = ({ navigation }) => {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    async function carregarServicos() {
      const querySnapshot = await getDocs(collection(db, "servicos"));
      const list = [];
      querySnapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));
      setServicos(list);
    }
    carregarServicos();
  }, []);

  const addServicoSelecionado = async (servico) => {
    const user = auth.currentUser;

    if (!user) {
      alert("Usuário não logado!");
      return;
    }

    // Buscar dados do usuário no Firestore
    const snap = await getDoc(doc(db, "usuario", user.uid));
    const data = snap.data();

    navigation.navigate("CriarPedido", {
      servico: servico,
      nome: data.nome,
      email: data.email
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.contTop}>
        <TouchableOpacity style={styles.buttonListaPedidos} onPress={() => navigation.navigate('PedidosPorCliente')}>
          <Text style={{ color: '#fff' }}>Ver meus pedidos</Text>
          <FontAwesome name="list-alt" size={28} color='#fff' />
        </TouchableOpacity>
      </View>

      <FlatList
        data={servicos}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <Text style={styles.serviceName}>{item.nome}</Text>
            <Text style={styles.servicoText}>Data prevista para conclusão: {item.data} dias</Text>
            <Text style={styles.servicoText}>Valor: R$ {item.valor}</Text>
            <TouchableOpacity
              style={styles.selectButton}
              onPress={() => addServicoSelecionado(item)}>
              <Text style={styles.selectButtonText}><FontAwesome name="cart-plus" color="#fff" size={28} /></Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ListarServicoTela;
