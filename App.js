import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import PagInicial from './pages/PagInicial'
import Carrinho from './pages/carrinho'
import Pagamento from './pages/pagamento'
import Emp from './pages/homeEmpresa'
import cadastroProd from './pages/cadastroProd'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }}/>
        <Stack.Screen name="PagInicial" component={PagInicial} options={{ headerShown: false }}/>
        <Stack.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }}/>
        <Stack.Screen name="Pagamento" component={Pagamento} options={{ headerShown: false }}/>
        <Stack.Screen name="Emp" component={Emp} options={{ headerShown: false }}/>
        <Stack.Screen name="cadastroProd" component={cadastroProd} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

