// Este arquivo contém os dados dos produtos que serão exibidos no aplicativo.
// Usamos um array (lista) de objetos, onde cada objeto representa um prato.

export const PRODUTOS = [
  {
    id: '1', // Identificador único do produto
    nome: 'Salada Tropical', // Nome do prato
    descricao: 'Mix de folhas verdes, manga, abacate e castanhas.', // Descrição detalhada
    preco: 25.90, // Preço do item
    imagem: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500', // Link da imagem
    categoria: 'Saladas' // Categoria para organização
  },
  {
    id: '2',
    nome: 'Bowl de Quinoa',
    descricao: 'Quinoa real com legumes grelhados e molho de ervas.',
    preco: 32.50,
    imagem: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500',
    categoria: 'Bowls'
  },
  {
    id: '3',
    nome: 'Suco Detox Verde',
    descricao: 'Maçã, couve, limão e gengibre batidos na hora.',
    preco: 12.00,
    imagem: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=500',
    categoria: 'Bebidas'
  },
  {
    id: '4',
    nome: 'Hambúrguer de Grão de Bico',
    descricao: 'Hambúrguer artesanal no pão integral com maionese vegana.',
    preco: 28.00,
    imagem: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=500',
    categoria: 'Lanches'
  },
  {
    id: '5',
    nome: 'Poke Vegano (Edição Bulbassauro)',
    descricao: 'Arroz japonês, tofu marinado, shimeji e um Bulbassauro selvagem!',
    preco: 35.00,
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', // Easter Egg: Bulbassauro oficial
    categoria: 'Bowls'
  },
  {
    id: '6',
    nome: 'Espaguete de Abobrinha',
    descricao: 'Tiras de abobrinha ao molho pesto caseiro.',
    preco: 22.90,
    imagem: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500',
    categoria: 'Massas'
  },
  {
    id: '7',
    nome: 'Wrap de Falafel',
    descricao: 'Pão folha recheado com falafel, homus e salada.',
    preco: 19.50,
    imagem: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=500',
    categoria: 'Lanches'
  },
  {
    id: '8',
    nome: 'Salada Caesar Vegana',
    descricao: 'Alface romana, croutons integrais e molho caesar à base de castanhas.',
    preco: 24.00,
    imagem: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=500',
    categoria: 'Saladas'
  },
  {
    id: '9',
    nome: 'Smoothie de Frutas Vermelhas',
    descricao: 'Mix de morango, amora e framboesa com leite de coco.',
    preco: 15.00,
    imagem: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=500',
    categoria: 'Bebidas'
  },
  {
    id: '10',
    nome: 'Risoto de Cogumelos',
    descricao: 'Arroz arbóreo com mix de cogumelos frescos e azeite trufado.',
    preco: 38.00,
    imagem: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=500',
    categoria: 'Massas'
  }
];
