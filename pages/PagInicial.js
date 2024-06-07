import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts, KulimPark_600SemiBold, KulimPark_700Bold } from '@expo-google-fonts/kulim-park';
import AppLoading from 'expo-app-loading';

function PagInicial() {
  const navigation = useNavigation();
  const [plasticos, setPlasticos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/listaPlasticos')
      .then(response => response.json())
      .then(data => {
        console.log('Dados recebidos:', data);  // Log dos dados recebidos
        setPlasticos(data);
      })
      .catch(error => console.error('Erro ao buscar plásticos:', error));
  }, []);

  const adicionarAoCarrinho = (plastico) => {
    setCarrinho([...carrinho, plastico]);
  };

  let [fontsLoaded] = useFonts({
    KulimPark_600SemiBold,
    KulimPark_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Home</Text>
        </View>
        <Pressable style={styles.view6} onPress={() => navigation.navigate('Emp')}>
          <Text style={styles.buttonText}>Sou fornecedor</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Carrinho', { carrinho, setCarrinho })}>
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c5acdf27d9caf9e9dff7414a3a7164a431c00a5e5db4018bac3794aabd5d52?apiKey=158b6ed61e85463ba9c1830937d4af5a&",
            }}
            style={styles.logo}
          />
        </Pressable>
        <View style={styles.productList}>
          {plasticos.length > 0 ? (
            plasticos.map((plastico, index) => (
              <View style={styles.productItem} key={index}>
                <View style={styles.productDescription}>
                  <Text style={styles.productPrice}>Tipo: {plastico.tipo_plastico}</Text>
                  <Text style={styles.productPrice}>Descrição: {plastico.ds_descricao}</Text>
                </View>
                <View style={styles.productFooter}>
                  <View style={styles.productPrice}>
                    <Text style={styles.productPrice}>R$ {plastico.ds_preco}</Text>
                  </View>
                  <Pressable onPress={() => adicionarAoCarrinho(plastico)}>
                    <Image
                      resizeMode="auto"
                      source={{
                        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e9f124c5b8f17fc31c0a51d135f4e1b4786f2a165154cbb5901f53307f37aee?apiKey=158b6ed61e85463ba9c1830937d4af5a&",
                      }}
                      style={styles.cartIcon}
                    />
                  </Pressable>
                </View>
              </View>
            ))
          ) : (
            <Text>Nenhum dado encontrado</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#FFF",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 80,
    alignItems: "stretch",
    margin: "0 auto",
  },
  headerContent: {
    backgroundColor: "#86B049",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 60,
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "KulimPark_700Bold",
  },
  logo: {
    alignSelf: "flex-end",
    width: 49,
    marginTop: 24,
    marginRight: 23,
    aspectRatio: 1.09,
  },
  productList: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 364,
    marginTop: 32,
    alignItems: "stretch",
  },
  productItem: {
    borderRadius: 6,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    padding: 15,
    marginBottom: 20, 
  },
  productDescription: {
    fontFamily: "KulimPark_700Bold",
    marginTop: 11,
  },
  productFooter: {
    flexDirection: "row",
    marginTop: 6,
    alignItems: "center", 
    justifyContent: "space-between",
  },
  productPrice: {
    fontFamily: "KulimPark_700Bold",
    marginTop: 13,
  },
  cartIcon: {
    width: 28,
    aspectRatio: 1,
  },
  view6: {
    backgroundColor: 'rgba(71, 105, 48, 1)',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center', 
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "KulimPark_700Bold",
  },
});

export default PagInicial;
