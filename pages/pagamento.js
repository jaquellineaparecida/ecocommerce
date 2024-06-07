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
          <Text>Pagamento</Text>
        </View>
        <View style={styles.view3}>
        <View style={styles.view4}>
          <Text>Preencha o formulário para prosseguirmos com a sua compra</Text>
        </View>
          <View style={styles.view5}>
            <Text>Nome no cartão</Text>
            <TextInput
              style={styles.input}
              value={nomeCartao}
              onChangeText={setNomeCartao}
            />
          </View>
          <View style={styles.view6}>
            <Text>Número do cartão</Text>
            <TextInput
              style={styles.input}
              value={numeroCartao}
              onChangeText={setNumeroCartao}
            />
          </View>
          <View style={styles.view7}>
            <Text>CNPJ</Text>
            <TextInput
              style={styles.input}
              value={cnpj}
              onChangeText={setCnpj}
            />
          </View>
          <View style={styles.view8}>
            <Text>Data de validade</Text>
            <TextInput
              style={styles.input}
              value={validade}
              onChangeText={setValidade}
            />
          </View>
          <View style={styles.view9}>
            <Text>CVV</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
          <View style={styles.view10}>
          <Text style={styles.view11}>Total</Text>
          <View style={styles.view12}>
            <Text>R$ {calcularSubtotal()}</Text> 
          </View>
        </View>
          <TouchableOpacity style={styles.view13} onPress={handleFinalizar}>
            <Text>Finalizar</Text>
          </TouchableOpacity>
        </View>
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
    paddingBottom: 80,
    flexDirection: "column",
    alignItems: "stretch",
    fontWeight: "700",
    margin: "0 auto",
  },
  view2: {
    backgroundColor: "#86B049",
    width: "100%",
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "27px 20px",
  },
  view3: {
    display: "flex",
    marginTop: 30,
    width: "100%",
    flexDirection: "column",
    alignItems: "end",
    fontSize: 20,
    color: "#000",
    padding: "0 20px 0 11px",
  },
  view4: {
    fontFamily: "Kulim Park, sans-serif",
    alignSelf: "stretch",
  },
  view5: {
    fontFamily: "Kulim Park, sans-serif",
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: 340,
    maxWidth: "100%",
    alignItems: "start",
    justifyContent: "center",
    padding: "20px 20px",
  },
  view6: {
    fontFamily: "Kulim Park, sans-serif",
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: 340,
    maxWidth: "100%",
    alignItems: "start",
    justifyContent: "center",
    padding: "20px 20px",
  },
  view7: {
    fontFamily: "Kulim Park, sans-serif",
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: 340,
    maxWidth: "100%",
    alignItems: "start",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "20px 20px",
  },
  view8: {
    fontFamily: "Kulim Park, sans-serif",
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: 340,
    maxWidth: "100%",
    alignItems: "start",
    justifyContent: "center",
    padding: "20px 20px",
  },
  view9: {
    fontFamily: "Kulim Park, sans-serif",
    borderRadius: 14,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 14,
    width: 340,
    maxWidth: "100%",
    alignItems: "start",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "20px 20px",
  },
  view10: {
    alignSelf: "center",
    display: "flex",
    marginTop: 20,
    width: "100%",
    maxWidth: 330,
    alignItems: "stretch",
    gap: 20,
    fontSize: 24,
  },
  view11: {
    fontFamily: "Kulim Park, sans-serif",
  },
  view12: {
    fontFamily: "Kulim Park, sans-serif",
    flexGrow: "1",
    flexShrink: "1",
    flexBasis: "auto",
  },
  view13: {
    borderRadius: 8,
    backgroundColor: "#476930",
    alignSelf: "center",
    marginTop: 22,
    width: "100%",
    maxWidth: 340,
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "23px 60px",
    font: "24px Kulim Park, sans-serif ",
  },
});

export default Pagamento;