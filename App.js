import React from 'react'; // Importa o React
import { TouchableOpacity } from 'react-native'; // Importa o componente para cliques
import { NavigationContainer } from '@react-navigation/native'; // Gerenciador de navegação global
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Navegador em pilha (Stack)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Navegador por abas (Tabs)
import { Ionicons } from '@expo/vector-icons'; // Importa ícones que já vêm no Expo

// Importa nossas telas criadas
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen'; // Importa a nova tela do carrinho

// Importa o Provedor do Carrinho para que o estado seja global
import { CartProvider } from './context/CartContext';

// Cria os objetos de navegação
const Stack = createNativeStackNavigator(); // Cria a pilha de telas
const Tab = createBottomTabNavigator(); // Cria as abas de baixo

// Componente do botão de carrinho que aparece no topo
const CartButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{ marginRight: 15 }}>
    <Ionicons name="cart-outline" size={24} color="#2E7D32" />
  </TouchableOpacity>
);

// Função que define as Abas (Home e Perfil)
function MyTabs({ navigation }) {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        // Define os ícones para cada aba de forma dinâmica
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            // Se estiver na aba Home, usa o ícone de restaurante
            iconName = focused ? 'restaurant' : 'restaurant-outline';
          } else if (route.name === 'Profile') {
            // Se estiver na aba Profile, usa o ícone de pessoa
            iconName = focused ? 'person' : 'person-outline';
          }

          // Retorna o componente de ícone do Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2E7D32', // Cor da aba quando selecionada (Verde)
        tabBarInactiveTintColor: 'gray', // Cor da aba quando não selecionada
        headerTitleAlign: 'center', // Alinha o título do topo no centro
        // Adiciona o botão do carrinho no topo direito da aba Home
        headerRight: () => route.name === 'Home' ? <CartButton navigation={navigation} /> : null,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Cardápio' }} // Nome que aparece na aba
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Meu Perfil' }} 
      />
    </Tab.Navigator>
  );
}

// Componente principal do App (Ponto de entrada)
export default function App() {
  return (
    // O CartProvider envolve todo o app para que todos possam ver o carrinho
    <CartProvider>
      <NavigationContainer>
        {/* O StackNavigator controla o fluxo principal (Login -> Home) */}
        <Stack.Navigator initialRouteName="Login">
          
          {/* Tela de Login (não tem abas) */}
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} // Esconde o cabeçalho na tela de login
          />

          {/* Grupo de telas que contêm as abas */}
          <Stack.Screen 
            name="Main" 
            component={MyTabs} 
            options={{ headerShown: false }} // As abas já têm seu próprio cabeçalho
          />

          {/* Tela de Detalhes */}
          <Stack.Screen 
            name="Details" 
            component={DetailScreen} 
            options={({ navigation }) => ({ 
              title: 'Detalhes do Prato',
              // Adiciona o botão de carrinho no topo direito também nos detalhes
              headerRight: () => <CartButton navigation={navigation} />,
            })} 
          />

          {/* Tela do Carrinho */}
          <Stack.Screen 
            name="Cart" 
            component={CartScreen} 
            options={{ title: 'Meu Carrinho' }} 
          />

        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
