# GreenLeaf Delivery 🥗 - Projeto Acadêmico

Este é um aplicativo de delivery de comida saudável desenvolvido como um protótipo funcional para fins acadêmicos (nível Júnior). O foco do projeto é demonstrar o uso de navegação, listas, gerenciamento de estado e sensores do dispositivo.

## 👤 Identificação
*   **Nome Completo:** Jonathas Rikelme
*   **Matrícula:** 01849445

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

| Login | Cardápio | Carrinho | Perfil (Sensores) |
|-------|----------|----------|----------|
| <img width="250" height="520" alt="image" src="https://github.com/user-attachments/assets/c931ae75-3629-4010-99e8-eccf8e066404" /> | <img width="250" height="520" alt="image" src="https://github.com/user-attachments/assets/fc3467ad-d4d1-40c9-a2a0-49f41bc0589c" /> | <img width="250" height="520" alt="image" src="https://github.com/user-attachments/assets/d0babf73-1410-4837-a478-f0c19185b73c" /> | <img width="250" height="520" alt="image" src="https://github.com/user-attachments/assets/8151873c-da2a-4766-b785-5c61a09cd2eb" />
 


## 🚀 Como Instalar e Executar

### 1. Clonar ou baixar o projeto
Certifique-se de ter o **Node.js** instalado em sua máquina.

### 2. Instalar dependências
No terminal, dentro da pasta do projeto, execute no cmd:
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
*Este código foi desenvolvido com fins estritamente didáticos.*
