import React from 'react'; // Importa o React
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; // Importa componentes de interface

// Componente que representa um item da lista de produtos
const ProductCard = ({ item, onPress }) => {
  return (
    // Ao clicar no card, executa a função onPress (que levará para a tela de detalhes)
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Exibe a imagem do produto */}
      <Image source={{ uri: item.imagem }} style={styles.image} />
      
      {/* Área de informações do produto */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.nome}</Text> 
        <Text style={styles.category}>{item.categoria}</Text>
        <Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Estilos visuais do card
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF', // Cor de fundo branca
    borderRadius: 10, // Arredonda as bordas
    padding: 10, // Espaçamento interno
    marginVertical: 8, // Margem vertical entre cards
    flexDirection: 'row', // Alinha imagem e texto lado a lado
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 }, // Direção da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 4, // Espalhamento da sombra
  },
  image: {
    width: 80, // Largura fixa da imagem
    height: 80, // Altura fixa da imagem
    borderRadius: 8, // Bordas da imagem arredondadas
  },
  info: {
    marginLeft: 15, // Espaço entre imagem e texto
    justifyContent: 'center', // Centraliza o texto verticalmente
  },
  name: {
    fontSize: 18, // Tamanho do nome do prato
    fontWeight: 'bold', // Negrito
    color: '#333', // Cor cinza escuro
  },
  category: {
    fontSize: 14, // Tamanho da categoria
    color: '#666', // Cor cinza clara
    marginVertical: 2, // Margem curta
  },
  price: {
    fontSize: 16, // Tamanho do preço
    fontWeight: 'bold', // Negrito
    color: '#2E7D32', // Cor verde (tema do app)
  },
});

export default ProductCard; // Exporta para uso na HomeScreen
