import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { db, auth } from '../firebaseConfig';
import { collection, query, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

export default function MeusPedidosScreen() {

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const pedidosRef = collection(db, "pedidos");
    const q = query(pedidosRef, where("clienteId", "==", user.uid));

    // Atualiza automaticamente quando houver mudanças no banco
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = [];
      snapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });
      setPedidos(lista);
    });

    return () => unsubscribe();
  }, []);

  async function cancelarPedido(id) {
    await deleteDoc(doc(db, "pedidos", id));
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#222' }}>
      <Text style={{ color: '#fff', fontSize: 22, marginBottom: 20 }}>
        Meus Pedidos
      </Text>

      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor: '#444',
            padding: 15,
            borderRadius: 10,
            marginBottom: 15,
            gap: 8
          }}>
            <Text style={{ color: '#fff', fontSize: 18 }}>{item.nomeServico}</Text>
            <Text style={{ color: '#fff' }}>Quantidade: {item.quantidade}</Text>
            <Text style={{ color: '#fff' }}>Valor: R$ {item.valor}</Text>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
              Status: {item.status}
            </Text>


            {item.status === "pendente" && (
              <TouchableOpacity
                style={{
                  marginTop: 10,
                  backgroundColor: '#ff4444',
                  padding: 10,
                  borderRadius: 8
                }}
                onPress={() => cancelarPedido(item.id)}
              >
                <Text style={{ color: '#fff', textAlign: 'center' }}>Cancelar Pedido</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}
