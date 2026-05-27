import React, { createContext, useState } from 'react'; // Importa ferramentas do React para criar contexto e estados

// Cria o Contexto do Carrinho, que funciona como um "balde" de dados acessível por qualquer tela
export const CartContext = createContext();

// Componente Provedor que vai envolver o App e dar acesso aos dados
export const CartProvider = ({ children }) => {
  // Estado que guarda a lista de itens no carrinho
  const [itens, setItens] = useState([]);

  // Função para adicionar um prato ao carrinho
  const adicionarAoCarrinho = (produto) => {
    // Adiciona o novo produto na lista mantendo os que já estavam lá
    setItens([...itens, produto]);
  };

  // Função para limpar o carrinho (usada ao finalizar a compra)
  const limparCarrinho = () => {
    setItens([]); // Define a lista como vazia
  };

  // Calcula o valor total somando o preço de cada item da lista
  const valorTotal = itens.reduce((soma, item) => soma + item.preco, 0);

  return (
    // O Provider disponibiliza a lista e as funções para o restante do App
    <CartContext.Provider value={{ itens, adicionarAoCarrinho, limparCarrinho, valorTotal }}>
      {children}
    </CartContext.Provider>
  );
};
