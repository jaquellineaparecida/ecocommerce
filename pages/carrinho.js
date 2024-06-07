import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useFonts, KulimPark_600SemiBold, KulimPark_700Bold } from '@expo-google-fonts/kulim-park';
import { useNavigation, useRoute } from '@react-navigation/native';

function Carrinho() {
  const navigation = useNavigation();
  const route = useRoute();
  const { carrinho } = route.params;

  let [fontsLoaded] = useFonts({
    KulimPark_600SemiBold,
    KulimPark_700Bold,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Carrinho</Text>
      </View>

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
          </View>
        ))}
      </View>

      <View style={styles.subtotalContainer}>
        <Text style={styles.itemName}>Subtotal</Text>
        <Text style={styles.itemName}>R$ {carrinho.reduce((total, item) => total + item.ds_preco, 0)}</Text>
      </View>

      <TouchableOpacity style={styles.payment} onPress={() => navigation.navigate('Pagamento', { carrinho: carrinho })}>
        <Text style={styles.itemN}>Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    fontFamily: "KulimPark_700Bold"
  },
  itemContainer: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2, 
    borderColor: "#476930",
    borderRadius: 8, 
    padding: 10, 
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
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
  },
  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  payment: {
    backgroundColor: "#476930",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  itemN: {
    fontFamily: "KulimPark_700Bold",
    color: "#fff"
  },
});

export default Carrinho;
