import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useFonts, KulimPark_600SemiBold, KulimPark_700Bold } from '@expo-google-fonts/kulim-park';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    KulimPark_600SemiBold,
    KulimPark_700Bold,
  });

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3030/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          senha
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        navigation.navigate('PagInicial'); 
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao realizar login');
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
      <View style={styles.view1}>
        <Image
          resizeMode="contain"
          source={require('../assets/eco_white.png')}
          style={styles.image1}
        />
        <View style={styles.view2}>
          <Text style={styles.text}>Insira suas credenciais</Text>
        </View>
        <View style={styles.view3}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.view4}>
          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            style={styles.textInput}
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <TouchableOpacity style={styles.view5} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    backgroundColor: "#FFF",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: 50,
  },
  image1: {
    alignSelf: "center",
    width: 236,
    maxWidth: "100%",
    aspectRatio: 1.19,
    marginBottom: 35
  },
  view2: {
    marginTop: 10,
    alignItems: 'center',
  },
  view3: {
    borderRadius: 18,
    borderColor: "#476930",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 40,
    justifyContent: "center",
    padding: 15,
  },
  view4: {
    borderRadius: 18,
    borderColor: "#476930",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 10,
    justifyContent: "center",
    padding: 15,
  },
  view5: {
    borderRadius: 8,
    backgroundColor: "#476930",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: "KulimPark_700Bold",
  },
  textInput: {
    fontSize: 16,
    padding: 10,
    fontFamily: "KulimPark_700Bold",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "KulimPark_700Bold",
  },
});

export default Login;
