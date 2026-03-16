import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [nos, setNos] = useState(0);
  const [eles, setEles] = useState(0);

  const [vNos, setVNos] = useState(0);
  const [vEles, setVEles] = useState(0);

  function marcarNos(valor){

    const total = nos + valor;

    if(total >= 12){
      setVNos(vNos + 1);
      setNos(0);
      setEles(0);
    }else{
      setNos(total);
    }

  }

  function marcarEles(valor){

    const total = eles + valor;

    if(total >= 12){
      setVEles(vEles + 1);
      setNos(0);
      setEles(0);
    }else{
      setEles(total);
    }

  }

  function reiniciar(){
    setNos(0);
    setEles(0);
  }

  function novoJogo(){
    setNos(0);
    setEles(0);
    setVNos(0);
    setVEles(0);
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>🃏 Truco Score</Text>

      <View style={styles.placar}>

        <View style={styles.time}>
          <Text style={styles.nome}>Nós</Text>
          <Text style={styles.pontos}>{nos}</Text>
          <Text style={styles.vitoria}>Vitórias: {vNos}</Text>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarNos(1)}>
            <Text style={styles.botaoTexto}>+1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarNos(3)}>
            <Text style={styles.botaoTexto}>Truco (3)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarNos(6)}>
            <Text style={styles.botaoTexto}>Seis (6)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarNos(9)}>
            <Text style={styles.botaoTexto}>Nove (9)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarNos(12)}>
            <Text style={styles.botaoTexto}>Doze (12)</Text>
          </TouchableOpacity>

        </View>


        <View style={styles.time}>
          <Text style={styles.nome}>Eles</Text>
          <Text style={styles.pontos}>{eles}</Text>
          <Text style={styles.vitoria}>Vitórias: {vEles}</Text>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarEles(1)}>
            <Text style={styles.botaoTexto}>+1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarEles(3)}>
            <Text style={styles.botaoTexto}>Truco (3)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarEles(6)}>
            <Text style={styles.botaoTexto}>Seis (6)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarEles(9)}>
            <Text style={styles.botaoTexto}>Nove (9)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={()=>marcarEles(12)}>
            <Text style={styles.botaoTexto}>Doze (12)</Text>
          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.controles}>

        <TouchableOpacity style={styles.reset} onPress={reiniciar}>
          <Text style={styles.botaoTexto}>Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reset} onPress={novoJogo}>
          <Text style={styles.botaoTexto}>Novo Jogo</Text>
        </TouchableOpacity>

      </View>

      <StatusBar style="auto"/>

    </View>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:'#0f172a',
alignItems:'center',
justifyContent:'center'
},

titulo:{
fontSize:30,
color:'#fff',
marginBottom:30,
fontWeight:'bold'
},

placar:{
flexDirection:'row',
gap:30
},

time:{
backgroundColor:'#1e293b',
padding:20,
borderRadius:10,
alignItems:'center'
},

nome:{
color:'#fff',
fontSize:22,
fontWeight:'bold'
},

pontos:{
fontSize:45,
color:'#22c55e',
marginVertical:10
},

vitoria:{
color:'#fff',
marginBottom:10
},

botao:{
backgroundColor:'#2563eb',
padding:10,
marginTop:5,
borderRadius:6,
width:100,
alignItems:'center'
},

botaoTexto:{
color:'#fff',
fontWeight:'bold'
},

controles:{
flexDirection:'row',
gap:20,
marginTop:30
},

reset:{
backgroundColor:'#dc2626',
padding:12,
borderRadius:8
}

});