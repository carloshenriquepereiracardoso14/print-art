import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { db } from "../firebaseConfig";
import { collection, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import styles from '../screens/styles/crud/ListaPedidosAdminStyle';
import { FontAwesome, MaterialCommunityIcons, FontAwesome6  } from '@expo/vector-icons';

export default function AdminPedidos() {
    const [pedidos, setPedidos] = useState([]);
    const [filtroStatus, setFiltroStatus] = useState("todos");

    async function carregarPedidos() {
        try {
            let ref = collection(db, "pedidos");

            if (filtroStatus !== "todos") {
                ref = query(ref, where("status", "==", filtroStatus));
            }

            const querySnapshot = await getDocs(ref);

            const lista = [];
            querySnapshot.forEach((docPedido) => {
                lista.push({ id: docPedido.id, ...docPedido.data() });
            });

            setPedidos(lista);

        } catch (error) {
            console.log("Erro ao carregar pedidos:", error);
        }
    }

    async function atualizarStatus(id, novoStatus) {
        try {
            await updateDoc(doc(db, "pedidos", id), { status: novoStatus });
            carregarPedidos();
        } catch (error) {
            console.log("Erro ao atualizar status:", error);
        }
    }

    async function deletarPedido(id) {
        Alert.alert("Confirmar", "Tem certeza que deseja deletar este pedido?", [
            { text: "Cancelar", style: "cancel" },
            {
                text: "Deletar",
                style: "destructive",
                onPress: async () => {
                    try {
                        await deleteDoc(doc(db, "pedidos", id));
                        carregarPedidos();
                    } catch (error) {
                        console.log("Erro ao deletar:", error);
                    }
                },
            },
        ]);
    }

    useEffect(() => {
        carregarPedidos();
    }, [filtroStatus]);

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Pedidos dos Clientes
            </Text>

            {/* Filtro */}
            <View style={styles.listaFiltro}>
                {["todos", "pendente", "em andamento", "finalizado"].map((status) => (
                    <TouchableOpacity
                        key={status}
                        onPress={() => setFiltroStatus(status)}
                        style={{
                            padding: 8,
                            marginRight: 8,
                            backgroundColor: filtroStatus === status ? "#333" : "#555",
                            borderRadius: 5,
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={styles.status}>{status}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={pedidos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={styles.pedidoBox}
                    >
                        <Text style={styles.infos}>Cliente: {item.clienteNome}</Text>
                        <Text style={styles.infos}>Serviço: {item.nomeServico}</Text>
                        <Text style={styles.infos}>Valor: R$ {item.valor}</Text>
                        <Text style={styles.infos}>Qauntidade: {item.quantidade}</Text>
                        <Text style={styles.infos}>Status: {item.status}</Text>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <TouchableOpacity
                                onPress={() => atualizarStatus(item.id, "em andamento")}
                                style={{
                                    marginRight: 10,
                                    padding: 8,
                                    backgroundColor: "#0f1da1ff",
                                    borderRadius: 5,
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ color: "#fff" }}><FontAwesome6 name='clock-rotate-left' size={24} /></Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => atualizarStatus(item.id, "finalizado")}
                                style={{
                                    marginRight: 10,
                                    padding: 8,
                                    backgroundColor: "green",
                                    borderRadius: 5,
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'

                                }}
                            >
                                <Text style={{ color: "#fff" }}><FontAwesome name="check-circle" size={28} color="#fff" /></Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => atualizarStatus(item.id, "pendente")}
                                style={{
                                    marginRight: 10,
                                    padding: 8,
                                    backgroundColor: "#3498db",
                                    borderRadius: 5,
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ color: "#fff" }}><MaterialCommunityIcons name='progress-clock' size={28} /></Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => deletarPedido(item.id)}
                                style={{
                                    padding: 8,
                                    backgroundColor: "red",
                                    borderRadius: 5,
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ color: "#fff" }}><FontAwesome name="trash" size={28} /></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}