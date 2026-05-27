import React from 'react'; // Importa a biblioteca base do React
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; // Importa componentes básicos do React Native

// Define um componente de botão reutilizável e simples
const MyButton = ({ title, onPress, color = '#2E7D32' }) => {
  return (
    // TouchableOpacity é um botão que fica transparente ao ser clicado
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color }]} // Aplica estilos e a cor passada via prop
      onPress={onPress} // Define a função que será executada ao clicar
    >
      <Text style={styles.text}>{title}</Text> 
    </TouchableOpacity>
  );
};

// Estilos do botão
const styles = StyleSheet.create({
  button: {
    padding: 15, // Espaçamento interno
    borderRadius: 8, // Bordas arredondadas
    alignItems: 'center', // Centraliza o texto na horizontal
    justifyContent: 'center', // Centraliza o texto na vertical
    marginVertical: 10, // Espaçamento em cima e embaixo do botão
  },
  text: {
    color: '#FFFFFF', // Cor do texto (Branco)
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Deixa o texto em negrito
  },
});

export default MyButton; // Exporta para ser usado em outras telas
