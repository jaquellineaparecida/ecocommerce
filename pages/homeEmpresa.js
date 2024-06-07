import { View,StyleSheet,Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

function HomeEmp() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text>Home</Text>
      </View>
      <TouchableOpacity style={styles.view3} onPress={() => navigation.navigate('cadastroProd')}>
        <Text>Cadastrar produto para venda</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 24,
    color: "#FFF",
    fontWeight: "700",
    margin: "0 auto",
  },
  view2: {
    fontFamily: "Kulim Park, sans-serif",
    backgroundColor: "#86B049",
    width: "100%",
    alignItems: "center",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: "30px 60px",
  },
  view3: {
    fontFamily: "Kulim Park, sans-serif",
    borderRadius: 8,
    backgroundColor: "#476930",
    alignSelf: "center",
    marginTop: 81,
    alignItems: "stretch",
    justifyContent: "center",
    padding: "21px 16px",
  },
});

export default HomeEmp;

