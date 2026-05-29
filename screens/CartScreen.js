import React, { useContext } from 'react'; // Importa o React e o Hook para usar o contexto
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native'; // Importa componentes de interface
import { CartContext } from '../context/CartContext'; // Importa o nosso contexto do carrinho
import MyButton from '../components/MyButton'; // Importa nosso componente de botão

// Tela do Carrinho de Compras
const CartScreen = ({ navigation }) => {
  // Pega os dados e funções do carrinho através do Contexto
  const { itens, valorTotal, limparCarrinho } = useContext(CartContext);

  // Função chamada ao clicar em Finalizar Compra
  const finalizarCompra = () => {
    // Verifica se o carrinho está vazio antes de prosseguir
    if (itens.length === 0) {
      Alert.alert('Aviso', 'Seu carrinho está vazio!');
      return;
    }

    // Se tiver itens, mostra mensagem de sucesso
    Alert.alert(
      'Compra Finalizada!',
      `Obrigado por comprar conosco. Total: R$ ${valorTotal.toFixed(2)}`,
      [
        { 
          text: 'OK', 
          onPress: () => {
            limparCarrinho(); // Esvazia o carrinho
            // Navega para 'Main', que contém as abas (a aba padrão é a Home/Cardápio)
            navigation.navigate('Main'); 
          } 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Lista de itens simples: apenas nome e preço */}
      <FlatList
        data={itens} // Fonte de dados do carrinho
        keyExtractor={(item, index) => index.toString()} // Usa o índice como chave única
        ListEmptyComponent={<Text style={styles.empty}>Seu carrinho está vazio 🥗</Text>} // Mensagem se não houver itens
        renderItem={({ item }) => (
          // Desenha cada linha do carrinho
          <View style={styles.itemRow}>
            <Text style={styles.itemName}>{item.nome}</Text>
            <Text style={styles.itemPrice}>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
      />

      {/* Seção do valor total e botão de finalizar */}
      <View style={styles.footer}>
        <View style={styles.totalArea}>
          <Text style={styles.totalLabel}>Total do Pedido:</Text>
          <Text style={styles.totalValue}>R$ {valorTotal.toFixed(2)}</Text>
        </View>

        <MyButton title="Finalizar Compra" onPress={finalizarCompra} />
      </View>
    </View>
  );
};

// Estilos da tela do carrinho
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  empty: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#999',
  },
  itemRow: {
    flexDirection: 'row', // Alinha nome e preço na mesma linha
    justifyContent: 'space-between', // Joga um para cada lado
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1, // Sombra leve
  },
  itemName: {
    fontSize: 16,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#DDD',
    paddingTop: 20,
    marginTop: 10,
  },
  totalArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
});

export default CartScreen; // Exporta a tela
