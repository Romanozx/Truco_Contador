import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🃏 Truco Score</Text>

      <View style={styles.placar}>
        <View style={styles.time}>
          <Text style={styles.nome}>Nós</Text>
          <Text style={styles.pontos}>{nos}</Text>
        </View>

        <View style={styles.time}>
          <Text style={styles.nome}>Eles</Text>
          <Text style={styles.pontos}>{eles}</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 30,
    fontWeight: 'bold',
  },

  placar: {
    flexDirection: 'row',
    gap: 30,
  },

  time: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 130,
  },

  nome: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  pontos: {
    fontSize: 45,
    color: '#22c55e',
    marginVertical: 10,
  },
});