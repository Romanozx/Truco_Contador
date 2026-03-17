import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);

  const [vNos, setVNos] = useState(0);
  const [vEles, setVEles] = useState(0);

  function marcarNos(valor) {
    const total = nos + valor;

    if (total >= 12) {
      setVNos(vNos + 1);
      setNos(0);
      setEles(0);
    } else {
      setNos(total);
    }
  }

  function marcarEles(valor) {
    const total = eles + valor;

    if (total >= 12) {
      setVEles(vEles + 1);
      setNos(0);
      setEles(0);
    } else {
      setEles(total);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logunipar.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.placar}>
        <View style={styles.time}>
          <Text style={styles.nome}>Nós</Text>
          <Text style={styles.pontos}>{nos}</Text>
          <Text style={styles.vitoria}>Vitórias: {vNos}</Text>

          <TouchableOpacity style={styles.botao} onPress={() => marcarNos(1)}>
            <Text style={styles.botaoTexto}>+1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => marcarNos(3)}>
            <Text style={styles.botaoTexto}>Truco (3)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => marcarNos(6)}>
            <Text style={styles.botaoTexto}>Seis (6)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => marcarNos(9)}>
            <Text style={styles.botaoTexto}>Nove (9)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => marcarNos(12)}>
            <Text style={styles.botaoTexto}>Doze (12)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.time}>
          <Text style={styles.nome}>Eles</Text>
          <Text style={styles.pontos}>{eles}</Text>
          <Text style={styles.vitoria}>Vitórias: {vEles}</Text>

          <TouchableOpacity style={styles.botao} onPress={() => marcarEles(1)}>
            <Text style={styles.botaoTexto}>+1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => marcarEles(3)}>
            <Text style={styles.botaoTexto}>Truco (3)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => marcarEles(6)}>
            <Text style={styles.botaoTexto}>Seis (6)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => marcarEles(9)}>
            <Text style={styles.botaoTexto}>Nove (9)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => marcarEles(12)}>
            <Text style={styles.botaoTexto}>Doze (12)</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },

  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },

  logo: {
    width: 200,
    height: 90,
    resizeMode: 'contain',
  },

  placar: {
    flexDirection: 'row',
    gap: 40,
    marginTop: 20,
  },

  time: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  nome: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },

  pontos: {
    fontSize: 55,
    color: '#6d0ca5',
    marginVertical: 10,
    fontWeight: 'bold',
  },

  vitoria: {
    color: '#050505',
    marginBottom: 10,
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#5d08a3',
    padding: 12,
    marginTop: 6,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});