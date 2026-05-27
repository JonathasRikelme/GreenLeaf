import React, { useState, useEffect } from 'react'; // Importa o React, Hook de estado e efeito
import { View, Text, StyleSheet, Alert } from 'react-native'; // Importa componentes básicos
import * as Location from 'expo-location'; // Importa o sensor de localização do Expo
import * as Notifications from 'expo-notifications'; // Importa o sistema de notificações
import MyButton from '../components/MyButton'; // Importa nosso botão

// Configura como a notificação deve aparecer quando o app está aberto
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true, // Mostra o banner da notificação no topo da tela
    shouldShowList: true, // Mostra a notificação na lista/central de notificações
    shouldPlaySound: true, // Toca som ao receber
    shouldSetBadge: false, // Não altera o número no ícone do app
  }),
});

// Tela de Perfil com uso de Sensores
const ProfileScreen = () => {
  // Estado para guardar a localização encontrada
  const [localizacao, setLocalizacao] = useState('Clique para obter sua localização');
  
  // useEffect roda assim que a tela abre
  useEffect(() => {
    // Função para pedir permissão de notificações logo de cara
    const pedirPermissaoNotificacao = async () => {
      const { status } = await Notifications.requestPermissionsAsync(); // Pede permissão ao sistema
      if (status !== 'granted') {
        console.log('Permissão de notificação negada!'); // Avisa no console se não deixarem
      }
    };

    pedirPermissaoNotificacao(); // Executa o pedido
  }, []); // O array vazio [] faz rodar apenas 1 vez

  // Função para pegar a localização via GPS (Sensor 1)
  const obterLocalizacao = async () => {
    // Pede permissão para acessar o GPS
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    // Se o usuário negar, avisa e para a função
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'O acesso ao GPS é necessário.');
      return;
    }

    // Pega a posição atual do aparelho
    let location = await Location.getCurrentPositionAsync({});
    // Atualiza o texto na tela com Latitude e Longitude
    setLocalizacao(`Lat: ${location.coords.latitude.toFixed(4)}, Lon: ${location.coords.longitude.toFixed(4)}`);
    
    // Mostra um aviso de sucesso
    Alert.alert('Localização', 'Endereço atualizado com sucesso via GPS!');
  };

  // Função para enviar uma notificação local (Sensor 2)
  const enviarNotificacaoTest = async () => {
    // Agenda uma notificação para aparecer agora mesmo (daqui a 1 segundo)
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "GreenLeaf Delivery 🥗", // Título da notificação
        body: 'Seu pedido está sendo preparado com muito carinho!', // Texto da mensagem
      },
      trigger: { seconds: 1 }, // Dispara após 1 segundo (mais garantido no Expo Go)
    });
    
    // Mostra um alerta no app avisando que a notificação foi enviada
    Alert.alert('Sucesso', 'Notificação enviada! Olhe a barra de avisos do seu celular.');
  };

  return (
    // View principal da tela de perfil
    <View style={styles.container}>
      {/* Círculo que representa a foto do usuário */}
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>JD</Text>
      </View>

      <Text style={styles.userName}>João da Silva (Acadêmico)</Text>
      <Text style={styles.userEmail}>joao.estudante@faculdade.com</Text>

      {/* Seção de GPS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meu Endereço (GPS)</Text>
        <Text style={styles.infoText}>{localizacao}</Text>
        <MyButton title="Atualizar Localização" onPress={obterLocalizacao} color="#007BFF" />
      </View>

      {/* Seção de Notificações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Testar Notificações</Text>
        <MyButton title="Receber Aviso de Pedido" onPress={enviarNotificacaoTest} color="#FFA000" />
      </View>
    </View>
  );
};

// Estilos da ProfileScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center', // Centraliza tudo horizontalmente
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Faz o círculo
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  avatarText: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  section: {
    width: '100%', // Ocupa a largura total
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2, // Sombrinha leve
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    fontStyle: 'italic',
  }
});

export default ProfileScreen; // Exporta a tela
