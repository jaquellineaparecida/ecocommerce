import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

function CadastroProd() {
  const [tipoPlastico, setTipoPlastico] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const [reciclavel, setReciclavel] = useState("");

  const handleSubmit = () => {
    fetch('http://localhost:3030/plasticos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tipo_plastico: tipoPlastico,
        ds_descricao: descricao,
        ds_quantidade: quantidade,
        ds_preco: preco,
        ds_reciclavel: reciclavel
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Erro ao cadastrar plástico');
    })
    .then(data => {
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso');
      setTipoPlastico("");
      setDescricao("");
      setQuantidade("");
      setPreco("");
      setReciclavel("");
    })
    .catch(error => {
      Alert.alert('Erro', error.message);
    });
  };

  return (
    <ScrollView>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text>Cadastro</Text>
        </View>
        <View style={styles.view3}>
          <View style={styles.view7}>
            <TextInput
              placeholder="Tipo do plastico"
              style={styles.input}
              value={tipoPlastico}
              onChangeText={setTipoPlastico}
            />
          </View>
          <View style={styles.view8}>
            <TextInput
              placeholder="Pequena descrição"
              style={styles.input}
              value={descricao}
              onChangeText={setDescricao}
            />
          </View>
          <View style={styles.view9}>
            <TextInput
              placeholder="Quantidade"
              style={styles.input}
              value={quantidade}
              onChangeText={setQuantidade}
            />
          </View>
          <View style={styles.view10}>
            <TextInput
            placeholder="Preço"
              style={styles.input}
              value={preco}
              onChangeText={setPreco}
            />
          </View>
          <View style={styles.view11}>
            <TextInput
              placeholder="É reciclavél?"
              style={styles.input}
              value={reciclavel}
              onChangeText={setReciclavel}
            />
          </View>
          <TouchableOpacity style={styles.view12} onPress={handleSubmit}>
            <Text>Cadastrar</Text>
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
    margin: "0 auto",
  },
  view2: {
    backgroundColor: "#86B049",
    width: "100%",
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "30px 60px",
    font: "700 24px Kulim Park, sans-serif ",
  },
  view3: {
    display: "flex",
    marginTop: 33,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "0 42px",
  },
  view4: {
    color: "#000",
    font: "700 24px Kulim Park, sans-serif ",
  },
  view5: {
    backgroundColor: "#D9D9D9",
    display: "flex",
    marginTop: 17,
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
    padding: "63px 60px",
  },
  image1: {
    position: "relative",
    marginLeft: 10,
    width: 48,
    aspectRatio: "1.04",
  },
  view6: {
    color: "#000",
    marginTop: 39,
    font: "700 24px Kulim Park, sans-serif ",
  },
  view7: {
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 16,
    alignItems: "start",
    color: "#000",
    justifyContent: "center",
    padding: "28px 20px",
    font: "700 20px Kulim Park, sans-serif ",
  },
  view8: {
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 27,
    alignItems: "start",
    color: "#000",
    justifyContent: "center",
    padding: "28px 20px",
    font: "700 20px Kulim Park, sans-serif ",
  },
  view9: {
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 27,
    alignItems: "start",
    color: "#000",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "30px 20px",
    font: "700 20px Kulim Park, sans-serif ",
  },
  view10: {
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 27,
    alignItems: "start",
    color: "#000",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "28px 20px",
    font: "700 20px Kulim Park, sans-serif ",
  },
  view11: {
    borderRadius: 18,
    borderColor: "rgba(71, 105, 48, 1)",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "#FFF",
    marginTop: 27,
    alignItems: "start",
    color: "#000",
    justifyContent: "center",
    padding: "28px 20px",
    font: "700 20px Kulim Park, sans-serif ",
  },
  view12: {
    borderRadius: 8,
    backgroundColor: "#476930",
    marginTop: 46,
    alignItems: "center",
    color: "#FFF",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "23px 60px",
    font: "700 24px Kulim Park, sans-serif ",
  },
});

export default CadastroProd;

