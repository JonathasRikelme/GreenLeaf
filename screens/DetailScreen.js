import React, { useContext } from 'react'; // Importa o React e o Hook para usar o contexto
import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native'; // Importa componentes necessários
import MyButton from '../components/MyButton'; // Importa o nosso botão padrão
import { CartContext } from '../context/CartContext'; // Importa o contexto para poder adicionar itens

// Tela de detalhes do prato
const DetailScreen = ({ route, navigation }) => {
  // Pega o objeto 'prato' que foi passado pela navegação na HomeScreen
  const { prato } = route.params;

  // Pega a função de adicionar ao carrinho do nosso contexto global
  const { adicionarAoCarrinho } = useContext(CartContext);

  // Função para executar a ação de adicionar ao carrinho
  const realizarCompra = () => {
    // Chama a função global para salvar o item na lista do carrinho
    adicionarAoCarrinho(prato);

    // Exibe um alerta simples avisando que funcionou
    Alert.alert(
      'Sucesso!', 
      `${prato.nome} foi adicionado ao seu carrinho.`,
      [
        { text: 'Ver Carrinho', onPress: () => navigation.navigate('Cart') }, // Opção de ir direto para o carrinho
        { text: 'Continuar Comprando', style: 'cancel' } // Apenas fecha o alerta
      ]
    );
  };

  return (
    // Usamos ScrollView para caso o texto seja grande e o usuário precise rolar a tela
    <ScrollView style={styles.container}>
      {/* Imagem grande no topo */}
      <Image source={{ uri: prato.imagem }} style={styles.image} />
      
      {/* Área de conteúdo textual */}
      <View style={styles.content}>
        <Text style={styles.category}>{prato.categoria}</Text>
        <Text style={styles.name}>{prato.nome}</Text>
        <Text style={styles.price}>R$ {prato.preco.toFixed(2)}</Text>
        
        {/* Divisor simples */}
        <View style={styles.divider} />
        
        <Text style={styles.descriptionTitle}>Descrição:</Text>
        <Text style={styles.descriptionText}>{prato.descricao}</Text>

        {/* Botão para comprar */}
        <View style={styles.buttonArea}>
          <MyButton title="Adicionar ao Carrinho" onPress={realizarCompra} />
        </View>
      </View>
    </ScrollView>
  );
};

// Estilos da DetailScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%', // Largura total
    height: 250, // Altura fixa
  },
  content: {
    padding: 20, // Margem interna para o texto
  },
  category: {
    fontSize: 14,
    color: '#2E7D32',
    fontWeight: 'bold',
    textTransform: 'uppercase', // Deixa em caixa alta
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 5,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEE', // Linha cinza clara
    marginVertical: 10,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24, // Melhora a leitura do texto
    marginTop: 5,
  },
  buttonArea: {
    marginTop: 30, // Espaço antes do botão
  }
});

export default DetailScreen; // Exporta a tela
