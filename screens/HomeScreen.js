import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style/HomeLoginStyle';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logoPrintArt.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.text}>Bem-vindo!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
        <FontAwesome name="user" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Registrar')}
      >
        <Text style={styles.buttonText}>Registrar</Text>
        <FontAwesome name="user-plus" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}