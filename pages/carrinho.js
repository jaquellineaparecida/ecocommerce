import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { useFonts, KulimPark_600SemiBold, KulimPark_700Bold } from '@expo-google-fonts/kulim-park';
import { useNavigation, useRoute } from '@react-navigation/native';

function Carrinho() {
  const navigation = useNavigation();
  const route = useRoute();
  const { carrinho, setCarrinho } = route.params;

  let [fontsLoaded] = useFonts({
    KulimPark_600SemiBold,
    KulimPark_700Bold,
  });

  useEffect(() => {
    navigation.setOptions({
      setCarrinho: (novoCarrinho) => {
        navigation.setParams({ carrinho: novoCarrinho });
      }
    });
  }, [navigation]);

  const removerItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    navigation.setParams({ carrinho: novoCarrinho });
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Carrinho</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('PagInicial')}>
        <Text style={styles.backButtonText}>Voltar à Página Inicial</Text>
      </TouchableOpacity>
      <View style={styles.itemContainer}>
        {carrinho.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image
              resizeMode="cover"
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6d6624ec647252023a2797cc8a848a4af5aed4a5399c404d1d4ad01e8a1dd61?apiKey=8ecde91761a047e2bfe494d122b6e61a&",
              }}
              style={styles.image}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.tipo_plastico}</Text>
              <Text style={styles.itemPrice}>R$ {item.ds_preco}</Text>
            </View>
            <TouchableOpacity onPress={() => removerItem(index)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.subtotalContainer}>
        <Text style={styles.itemName}>Subtotal</Text>
        <Text style={styles.itemName}>R$ {carrinho.reduce((total, item) => total + item.ds_preco, 0)}</Text>
      </View>
      <TouchableOpacity style={styles.payment} onPress={() => navigation.navigate('Pagamento', { carrinho })}>
        <Text style={styles.paymentText}>Pagamento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    maxWidth: 480,
    width: "100%",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#86B049",
    alignSelf: "stretch",
    width: "100%",
    height: 80,
    justifyContent: "center",
  },
  headerText: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "KulimPark_700Bold",
    fontSize: 24,
  },
  itemContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "90%", 
    maxWidth: 400, 
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#476930",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: "100%", 
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontFamily: "KulimPark_700Bold",
  },
  itemPrice: {
    fontFamily: "KulimPark_700Bold",
    marginTop: 5,
    width: "60%", 
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  payment: {
    backgroundColor: "#476930",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
    alignItems: "center",
  },
  itemN: {
    fontFamily: "KulimPark_700Bold",
    color: "#fff",
  },
  removeButton: {
    backgroundColor: "#FF0000",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  removeButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontFamily: "KulimPark_700Bold",
  },
  backButton: {
    backgroundColor: "#86B049",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 15
  },
  backButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "KulimPark_700Bold",
  },
  paymentText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "KulimPark_700Bold",
  }
});

export default Carrinho;
