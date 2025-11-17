import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import styles from './style/EnviarPedidoStyle'

const CriarPedido = ({ route, navigation }) => {
  const { servico, nome, email } = route.params;
  const [quantity, setQuantity] = useState(1);
  const user = auth.currentUser;

  async function enviarPedido() {
    await addDoc(collection(db, "pedidos"), {
      nomeServico: servico.nome,
      valor: servico.valor,
      quantidade: quantity,
      status: 'pendente',
      clienteId: user.uid,
      clienteNome: nome,
      clienteEmail: email,
      criado_em: serverTimestamp()
    });
    alert("Pedido enviado com sucesso!");
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.contInfos}>
        <Text style={styles.serviceName}>{servico.nome}</Text>
        <Text style={styles.infos}>Valor: R$ {servico.valor}</Text>
        <Text style={styles.infos}>Data prevista para conclusão: {servico.data}</Text>
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(quantity)}
        onChangeText={(text) => setQuantity(Number(text))}
      />

      <TouchableOpacity style={styles.buttonEnviar} onPress={enviarPedido}>
        <Text style={styles.infos}>Confirmar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CriarPedido;