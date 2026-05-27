import React, { useState } from 'react'; // Importa o React e o Hook de estado
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'; // Importa componentes básicos
import MyButton from '../components/MyButton'; // Importa nosso botão customizado

// Tela de Login Simples
const LoginScreen = ({ navigation }) => {
  // Define estados para guardar o que o usuário digita
  const [usuario, setUsuario] = useState(''); // Estado para o nome de usuário
  const [senha, setSenha] = useState(''); // Estado para a senha

  // Função que é chamada ao clicar no botão Entrar
  const fazerLogin = () => {
    // Validação simples: verifica se os campos não estão vazios
    if (usuario !== '' && senha !== '') {
      // Se estiver tudo certo, navega para a tela principal (Home)
      navigation.replace('Main'); // O 'replace' impede que o usuário volte para o login ao clicar em voltar
    } else {
      // Se faltar algum campo, exibe um alerta de erro
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    // View principal da tela
    <View style={styles.container}>
      <Text style={styles.title}>GreenLeaf Delivery</Text>
      <Text style={styles.subtitle}>Sua comida saudável em um clique</Text>

      {/* Campo para digitar o usuário */}
      <TextInput
        style={styles.input}
        placeholder="Usuário" // Texto que aparece antes de digitar
        value={usuario} // Valor vinculado ao estado
        onChangeText={setUsuario} // Atualiza o estado ao digitar
      />

      {/* Campo para digitar a senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true} // Esconde os caracteres da senha
      />

      {/* Botão de entrar usando nosso componente */}
      <MyButton title="Entrar" onPress={fazerLogin} />
      
      <Text style={styles.footer}>Protótipo Acadêmico - 2026</Text>
    </View>
  );
};

// Estilos da tela de login
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    justifyContent: 'center', // Centraliza na vertical
    padding: 20, // Espaçamento nas laterais
    backgroundColor: '#F5F5F5', // Cor de fundo clara
  },
  title: {
    fontSize: 28, // Tamanho grande para o título
    fontWeight: 'bold', // Negrito
    color: '#2E7D32', // Verde
    textAlign: 'center', // Centralizado
    marginBottom: 5, // Espaço embaixo
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30, // Mais espaço antes dos inputs
  },
  input: {
    backgroundColor: '#FFFFFF', // Fundo branco para o campo
    padding: 15,
    borderRadius: 8,
    borderWidth: 1, // Borda fina
    borderColor: '#DDD', // Cor da borda cinza clara
    marginBottom: 15, // Espaço entre os campos
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
  }
});

export default LoginScreen; // Exporta a tela
