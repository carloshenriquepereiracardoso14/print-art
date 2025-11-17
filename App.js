import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Home from './screens/HomeScreen';
import Registrar from './screens/RegisterScreen';
import Admin from './screens/CrudHomeScreen';
import AddServico from './screens/AddServicoScreen';
import EditServico from './screens/EditServicoScreen';
import Login from './screens/LoginScreen';
import AlterarSenha from './screens/AlterarSenha';
import ListarServicos from './screens/ListarServicos';
import CriarPedido from './screens/CriarPedido';
import ListaPedidosAdmin from './screens/ListaPedidosAdmin';
import PedidosPorCliente from './screens/PedidosPorCliente';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerTitleAlign: 'left',
      }}>

        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registrar" component={Registrar} />
        <Stack.Screen name="Admin" component={Admin} options={({ navigation, route }) => ({
          title: 'Painel Administrativo',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AlterarSenha', { email: route.params.email, nome: route.params.nome })}
              style={{ marginRight: 15 }}
            >
              <FontAwesome name="user-circle-o" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        })
        }
        />
        <Stack.Screen name="AddServico" component={AddServico} options={{ title: 'Cadastro de Serviços' }} />
        <Stack.Screen name="ListaPedidosAdmin" component={ListaPedidosAdmin} options={{ title: 'Lista de Pedidos Realizados' }} />
        <Stack.Screen name="EditServico" component={EditServico} options={{ title: 'Edição de Serviços' }} />
        <Stack.Screen name="AlterarSenha" component={AlterarSenha} options={{ title: 'Perfil do Usuário' }} />
        <Stack.Screen name="ListarServicos" component={ListarServicos} options={({ navigation, route }) => ({
          title: 'Serviços Disponíveis',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AlterarSenha', { email: route.params.email, nome: route.params.nome })}
              style={{ marginRight: 15 }}
            >
              <FontAwesome name="user-circle-o" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="CriarPedido" component={CriarPedido} options={{ title: 'Pedidos' }} />
        <Stack.Screen name="PedidosPorCliente" component={PedidosPorCliente} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
