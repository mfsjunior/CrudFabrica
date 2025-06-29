// Importa os hooks useEffect e useState do React para gerenciar estado e efeitos colaterais.
import { useEffect, useState } from 'react';
// Importa o axios, biblioteca para fazer requisições HTTP.
import axios from 'axios';

// Define o tipo Item, representando a estrutura de um item retornado pelo backend.
type Item = {
  _id: string;         // ID único do item (gerado pelo MongoDB).
  name: string;        // Nome do item.
  description: string; // Descrição do item.
};

// Exporta o componente principal da página inicial.
export default function Home() {
  // Estado para armazenar a lista de itens.
  const [items, setItems] = useState<Item[]>([]);
  // Estado para armazenar o valor do campo "name" do formulário.
  const [name, setName] = useState('');
  // Estado para armazenar o valor do campo "description" do formulário.
  const [description, setDescription] = useState('');

  // Função assíncrona para buscar todos os itens do backend.
  const fetchItems = async () => {
    // Exibe no console a URL da API que será usada.
    console.log('API_URL =>', process.env.NEXT_PUBLIC_API_URL);
    // Faz uma requisição GET para /items usando a URL da API definida no .env.local.
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items`);
    // Atualiza o estado com a lista de itens recebida.
    setItems(data);
  };

  // Função assíncrona para criar um novo item no backend.
  const createItem = async () => {
    // Envia uma requisição POST para /items com os dados do novo item.
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/items`, { name, description });
    // Atualiza a lista de itens após a criação.
    fetchItems();
    // Limpa os campos do formulário.
    setName('');
    setDescription('');
  };

  // useEffect executa fetchItems() uma vez quando o componente é montado.
  useEffect(() => {
    fetchItems();
  }, []);

  // Renderiza o formulário de criação e a lista de itens.
  return (
    <main style={{ padding: 20 }}>
      <h1>**** Itens*****</h1>
      {/* Campo de input para o nome do item */}
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
      {/* Campo de input para a descrição do item */}
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
      {/* Botão para criar um novo item */}
      <button onClick={createItem}>Criar</button>
      {/* Lista de itens renderizada dinamicamente */}
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name} - {item.description}</li>
        ))}
      </ul>
    </main>
  );
}
