import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useFonts, KulimPark_600SemiBold, KulimPark_700Bold } from '@expo-google-fonts/kulim-park';
import { useNavigation } from '@react-navigation/native';

function Home() {
   const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
    KulimPark_600SemiBold,
    KulimPark_700Bold,
  });

  return (
    <ScrollView>
      <View style={styles.view1}>
        <Image
          resizeMode="cover"
          source={require('../assets/eco_green.png')}
          style={styles.image1}
        />
        <Text style={styles.text}>EcoCommerce</Text>
        <TouchableOpacity style={styles.view2} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view3} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.btnText}>Cadastro</Text>
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
    backgroundColor: "#476930",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 200,
  },
  image1: {
    width: '75%',
    height: 300,
  },
  text: {
    fontFamily: "KulimPark_700Bold",
    color: "#fff",
    fontSize: 24,
    marginBottom: 30,
  },
  view2: {
    borderRadius: 9,
    backgroundColor: "#FFF",
    marginTop: 35,
    width: "100%",
    maxWidth: 250,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  view3: {
    borderRadius: 9,
    backgroundColor: "#FFF",
    marginTop: 20,
    width: "100%",
    maxWidth: 250,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  btnText: {
    fontFamily: "KulimPark_700Bold",
    color: "#000",
    fontSize: 16,
  }
});

export default Home;