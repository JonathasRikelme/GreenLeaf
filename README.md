# GreenLeaf Delivery 🥗 - Projeto Acadêmico

Este é um aplicativo de delivery de comida saudável desenvolvido como um protótipo funcional para fins acadêmicos (nível Júnior). O foco do projeto é demonstrar o uso de navegação, listas, gerenciamento de estado e sensores do dispositivo.

## 👤 Identificação
*   **Nome Completo:** [INSIRA SEU NOME AQUI]
*   **Matrícula:** [INSIRA SUA MATRÍCULA AQUI]

## 📱 Funcionalidades Implementadas
1.  **Fluxo de Login**: Tela inicial com validação simples de campos.
2.  **Cardápio Dinâmico**: Exibição de 10 produtos reais usando `FlatList` otimizada.
3.  **Detalhes do Prato**: Visualização expandida de cada item com foto, preço e descrição.
4.  **Carrinho de Compras**:
    *   Adição de itens via contexto global (`CartContext`).
    *   Listagem de itens (nome e preço).
    *   Cálculo automático do valor total do pedido.
    *   Opção de finalizar compra e retornar à Home.
5.  **Interface Responsiva**: Design limpo em tons de verde e branco com ícones visuais (`Ionicons`).

## 🛠️ Tecnologias Utilizadas
- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Plataforma para facilitar o desenvolvimento e testes.
- **React Navigation**: Gerenciamento de rotas (Stack e Bottom Tabs).
- **React Context API**: Gerenciamento de estado global (Carrinho).
- **JavaScript (ES6+)**: Linguagem principal de programação.

## 📡 Sensores Implementados
1.  **GPS (Geolocalização)**: Utiliza a biblioteca `expo-location` para obter as coordenadas (Latitude e Longitude) atuais do usuário na tela de perfil.
2.  **Notificações Locais**: Utiliza a biblioteca `expo-notifications` para disparar um alerta local simulando o status do pedido em preparação.

## 📸 Screenshots
> *Insira aqui as capturas de tela do seu aplicativo rodando no celular ou emulador.*

| Login | Cardápio | Detalhes | Carrinho | Perfil (Sensores) |
|-------|----------|----------|----------|-------------------|
| [Foto1] | [Foto2] | [Foto3] | [Foto4] | [Foto5] |

## 🚀 Como Instalar e Executar

### 1. Clonar ou baixar o projeto
Certifique-se de ter o **Node.js** instalado em sua máquina.

### 2. Instalar dependências
No terminal, dentro da pasta do projeto, execute:
```bash
npm install
```

### 3. Iniciar o projeto
Para rodar o app através do Expo, execute:
```bash
npx expo start
```

### 4. Visualizar no Celular
Abra o aplicativo **Expo Go** no seu smartphone e escaneie o QR Code que aparecerá no terminal.

---
*Este código foi desenvolvido com fins estritamente didáticos e possui comentários explicativos em todas as linhas para facilitar o entendimento do fluxo de desenvolvimento.*
