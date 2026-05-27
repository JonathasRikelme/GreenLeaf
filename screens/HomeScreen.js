import React from 'react'; // Importa o React
import { View, Text, FlatList, StyleSheet } from 'react-native'; // Importa componentes de lista e visualização
import { PRODUTOS } from '../data/mockData'; // Importa a lista de pratos que criamos
import ProductCard from '../components/ProductCard'; // Importa o componente visual de cada item

// Tela Inicial com a lista de produtos
const HomeScreen = ({ navigation }) => {
  
  // Função que será executada ao clicar em um prato
  const irParaDetalhes = (item) => {
    // Navega para a tela de Detalhes passando os dados do prato escolhido como parâmetro
    navigation.navigate('Details', { prato: item });
  };

  return (
    // View principal
    <View style={styles.container}>
      {/* Título da seção */}
      <Text style={styles.headerTitle}>Cardápio do Dia</Text>
      
      {/* FlatList é o componente oficial do React Native para listas performáticas */}
      <FlatList
        data={PRODUTOS} // Define a fonte de dados (nossos 10 itens)
        keyExtractor={(item) => item.id} // Define uma chave única para cada item (essencial no React)
        renderItem={({ item }) => (
          // Define como cada item será desenhado na tela usando nosso ProductCard
          <ProductCard 
            item={item} 
            onPress={() => irParaDetalhes(item)} // Passa a função de clique
          />
        )}
        contentContainerStyle={styles.list} // Estilo interno da lista
        showsVerticalScrollIndicator={false} // Esconde a barra de rolagem chata
      />
    </View>
  );
};

// Estilos da HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: '#F9F9F9', // Cor de fundo bem clara
    paddingHorizontal: 15, // Espaço nas laterais da lista
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 15, // Espaço em cima e embaixo do título
  },
  list: {
    paddingBottom: 20, // Espaço extra no fim da lista para não cortar o último item
  },
});

export default HomeScreen; // Exporta a tela
