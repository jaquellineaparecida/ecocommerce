import { View,StyleSheet,Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts, KulimPark_600SemiBold, KulimPark_700Bold } from '@expo-google-fonts/kulim-park';

function HomeEmp() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    KulimPark_600SemiBold,
    KulimPark_700Bold,
  });
  
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
    margin: "0 auto",
  },
  view2: {
    fontFamily: "KulimPark_700Bold",
    backgroundColor: "#86B049",
    width: "100%",
    alignItems: "center",
    whiteSpace: "nowrap",
    justifyContent: "center",
    padding: 45,
  },
  view3: {
    fontFamily: "KulimPark_700Bold",
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

