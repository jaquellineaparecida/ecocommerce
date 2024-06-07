import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { useFonts, KulimPark_600SemiBold, KulimPark_700Bold } from '@expo-google-fonts/kulim-park';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';

function Cadastro() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    KulimPark_600SemiBold,
    KulimPark_700Bold,
  });

  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [segmento, setSegmento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  const handleCadastro = async () => {
    try {
      const response = await fetch('http://localhost:3030/cadastroUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nm_empresa: nomeEmpresa,
          nmr_cnpj: cnpj,
          ds_segmento: segmento,
          ds_senha: senha,
          ds_email: email,
          ds_telefone: telefone
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        navigation.navigate('Home'); 
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar empresa');
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text style={styles.text1}>Faça o seu cadastro!</Text>
          </View>
          <Image
            resizeMode="auto"
            source={require('../assets/eco_white.png')}
            style={styles.image1}
          />
        </View>
        <View style={styles.view4}>
          <TextInput
            style={styles.inputText}
            placeholder="Nome da empresa"
            value={nomeEmpresa}
            onChangeText={setNomeEmpresa}
          />
        </View>
        <View style={styles.view5}>
          <TextInput
            style={styles.inputText}
            placeholder="CNPJ"
            value={cnpj}
            onChangeText={setCnpj}
          />
        </View>
        <View style={styles.view6}>
          <View style={styles.view7}>
            <TextInput
              style={styles.inputText}
              placeholder="Segmento"
              value={segmento}
              onChangeText={setSegmento}
            />
          </View>
        </View>
        <View style={styles.view8}>
          <TextInput
            style={styles.inputText}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>
        <View style={styles.view9}>
          <TextInput
            style={styles.inputText}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <View style={styles.view10}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <TouchableOpacity style={styles.view11} onPress={handleCadastro}>
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#FFF",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    margin: "0 auto",
    padding: "10px 8px 8px 8px",
  },
  view2: { 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "flex-start",
    alignItems: "center", 
    gap: 15
  },
  view3: {
    marginTop: 40,
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "auto",
  },
  image1: {
    width: 50,
    height: 55,
    alignSelf: "end",
  },
  view4: {
    borderRadius: 18,
    borderColor: "#476930",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 15,
    justifyContent: "center",
    padding: "20px 20px",
  },
  view5: {
    borderRadius: 18,
    borderColor: "#476930",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 15,
    alignItems: "start",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "20px 20px",
  },
  view6: {
    borderRadius: 18,
    borderColor: "#476930",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    display: "flex",
    marginTop: 15,
    alignItems: "stretch",
    gap: 20,
    whiteSpace: "nowrap",
    padding: "20px 52px 20px 22px",
  },
  view7: {
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "auto",
  },
  view8: {
    borderRadius: 18,
    borderColor: "#476930",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 15,
    alignItems: "start",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "20px 20px",
  },
  view9: {
    borderRadius: 18,
    borderColor: "#476930",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 15,
    alignItems: "start",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "20px 20px",
  },
  view10: {
    borderRadius: 18,
    borderColor: "#476930",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 15,
    alignItems: "start",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "20px 20px",
  },
  view11: {
    borderRadius: 8,
    backgroundColor: "#476930",
    marginTop: 15,
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "16px 16px",
  },
  text1: {
     fontFamily: "KulimPark_700Bold",
     color: "#000",
     fontSize: 18
  },
  inputText: {
    fontFamily: "KulimPark_700Bold",
    color: "#000",
    fontSize: 18
  },
  btnText: {
    fontFamily: "KulimPark_700Bold",
    color: "#fff",
    fontSize: 18
  }
});


export default Cadastro;