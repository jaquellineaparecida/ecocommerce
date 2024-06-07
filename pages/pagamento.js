import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

function Pagamento() {
  const navigation = useNavigation();
  const route = useRoute();
  const { carrinho } = route.params;
  
  // Função para calcular o subtotal do carrinho
  const calcularSubtotal = () => {
    return parseFloat(carrinho.reduce((total, item) => total + parseFloat(item.ds_preco), 0)).toFixed(2);
  };

  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const handleFinalizar = async () => {
    try {
      const subtotal = calcularSubtotal();
  
      const response = await axios.post('http://localhost:3030/pagamento', {
        nm_cartao: nomeCartao,
        nmr_cartao: numeroCartao,
        id_empresa: cnpj,
        data_validade: validade,
        ds_cvv: cvv,
        ds_total: subtotal // Usando o subtotal calculado
      });
    } catch (error) {
      // Se ocorrer um erro, exiba uma mensagem de erro para o usuário
      Alert.alert('Erro', 'Erro ao processar o pagamento. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <ScrollView>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text style={styles.text2}>Pagamento</Text>
        </View>
        <View style={styles.view3}>
        <View style={styles.view4}>
          <Text style={styles.text}>Preencha o formulário para prosseguirmos com a sua compra</Text>
        </View>
          <View style={styles.view5}>
            <Text style={styles.text}>Nome no cartão</Text>
            <TextInput
              style={styles.input}
              value={nomeCartao}
              onChangeText={setNomeCartao}
            />
          </View>
          <View style={styles.view6}>
            <Text style={styles.text}>Número do cartão</Text>
            <TextInput
              style={styles.input}
              value={numeroCartao}
              onChangeText={setNumeroCartao}
            />
          </View>
          <View style={styles.view7}>
            <Text style={styles.text}>CNPJ</Text>
            <TextInput
              style={styles.input}
              value={cnpj}
              onChangeText={setCnpj}
            />
          </View>
          <View style={styles.view8}>
            <Text style={styles.text}>Data de validade</Text>
            <TextInput
              style={styles.input}
              value={validade}
              onChangeText={setValidade}
            />
          </View>
          <View style={styles.view9}>
            <Text style={styles.text}>CVV</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
          <View style={styles.view10}>
          <Text style={styles.view11}>Total</Text>
          <View style={styles.view12}>
            <Text style={styles.text}>R$ {calcularSubtotal()}</Text> 
          </View>
        </View>
          <TouchableOpacity style={styles.view13} onPress={handleFinalizar}>
            <Text style={styles.text2}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 80,
  },
  view2: {
    backgroundColor: "#86B049",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 27,
    paddingHorizontal: 20,
  },
  view3: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  view4: {
    marginBottom: 20,
  },
  view5: {
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: "100%",
    maxWidth: 340,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  view6: {
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: "100%",
    maxWidth: 340,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  view7: {
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: "100%",
    maxWidth: 340,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  view8: {
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: "100%",
    maxWidth: 340,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  view9: {
    borderRadius: 14,
    borderColor: "rgba(71, 105, 48, 1)",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: "100%",
    maxWidth: 340,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  view10: {
    marginTop: 20,
    width: "100%",
    maxWidth: 330,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view11: {
    fontFamily: "KulimPark_700Bold",
    fontSize: 24,
  },
  view12: {
    flex: 1,
    marginLeft: 20,
  },
  view13: {
    borderRadius: 8,
    backgroundColor: "#476930",
    alignSelf: "center",
    marginTop: 22,
    width: "100%",
    maxWidth: 340,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 23,
    paddingHorizontal: 60,
  },
  input: {
    fontFamily: "KulimPark_700Bold",
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingVertical: 5,
    marginTop: 5,
  },
  text: {
    fontFamily: "KulimPark_700Bold",
    fontSize: 16
  },
  text2: {
    fontFamily: "KulimPark_700Bold",
    fontSize: 16,
    color: "#FFF"
  }
});

export default Pagamento;