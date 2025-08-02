import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';

// Define o tipo Item, representando a estrutura de um item retornado pelo backend.
type Item = {
  _id: string;
  name: string;
  description: string;
  status: 'pending' | 'accepted' | 'rejected';
  avatarUrl: string;
  code: string;
  imageUrl: string;
  additionalInfo: string;
};

// Exporta o componente principal da página inicial.
export default function Home() {
  // Estado para armazenar a lista de itens.
  const [items, setItems] = useState<Item[]>([]);
  // Estado para armazenar o termo de busca
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para armazenar a aba ativa
  const [activeTab, setActiveTab] = useState<string>('Pedidos');
  // Estado para armazenar o campo "name" do formulário.
  const [name, setName] = useState('');
  // Estado para armazenar o campo "description" do formulário.
  const [description, setDescription] = useState('');
  // Estado para armazenar os itens filtrados
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  // Função assíncrona para buscar todos os itens do backend.
  const fetchItems = async () => {
    try {
      // Exibe no console a URL da API que será usada.
      console.log('API_URL =>', process.env.NEXT_PUBLIC_API_URL);
      // Faz uma requisição GET para /items usando a URL da API definida no .env.local.
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/items`);
      // Atualiza o estado com a lista de itens recebida.
      setItems(data);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
    }
  };

  // Função assíncrona para criar um novo item no backend.
  const createItem = async () => {
    try {
      // Envia uma requisição POST para /items com os dados do novo item.
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/items`, { name, description });
      // Atualiza a lista de itens após a criação.
      fetchItems();
      // Limpa os campos do formulário.
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Erro ao criar item:', error);
    }
  };

  // Mock data with photos and items for demonstration
  const mockItems: Item[] = [
    {
      _id: '1',
      name: 'Gabriel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      status: 'pending',
      avatarUrl: '',
      code: '2023215',
      imageUrl: 'https://receitadaboa.com.br/wp-content/uploads/2024/08/iStock-1917699441.jpg',
      additionalInfo: 'Coca-Cola Zero 300ml',
    },
    {
      _id: '2',
      name: 'Mateus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      status: 'pending',
      avatarUrl: '',
      code: '2023216',
      imageUrl: 'https://receitadaboa.com.br/wp-content/uploads/2024/08/iStock-1917699441.jpg',
      additionalInfo: 'Coca-Cola Zero 300ml',
    },
    {
      _id: '3',
      name: 'Arthur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      status: 'pending',
      avatarUrl: '',
      code: '2023217',
      imageUrl: 'https://receitadaboa.com.br/wp-content/uploads/2024/08/iStock-1917699441.jpg',
      additionalInfo: 'Coca-Cola Zero 300ml',
    },
    {
      _id: '4',
      name: 'Eduardo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      status: 'pending',
      avatarUrl: '',
      code: '2023218',
      imageUrl: 'https://receitadaboa.com.br/wp-content/uploads/2024/08/iStock-1917699441.jpg',
      additionalInfo: 'Coca-Cola Zero 300ml',
    },
    {
      _id: '5',
      name: 'Daniel',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      status: 'pending',
      avatarUrl: '',
      code: '2023219',
      imageUrl: 'https://receitadaboa.com.br/wp-content/uploads/2024/08/iStock-1917699441.jpg',
      additionalInfo: 'Coca-Cola Zero 300ml',
    },
    {
      _id: '6',
      name: 'Juan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      status: 'pending',
      avatarUrl: '',
      code: '2023220',
      imageUrl: 'https://receitadaboa.com.br/wp-content/uploads/2024/08/iStock-1917699441.jpg',
      additionalInfo: 'Sem adicionais',
    },
  ];

  // useEffect executa fetchItems() uma vez quando o componente é montado.
  useEffect(() => {
    // Commenting out fetchItems to use mock data for now
    // fetchItems();
    setItems(mockItems);
  }, []);

  // useEffect para filtrar itens com base no termo de busca e aba ativa.
  useEffect(() => {
    console.log('Items:', items);
    const filtered = items.filter(item => {
      if (activeTab === 'Pedidos') return item.status === 'pending';
      if (activeTab === 'Editar Cardápio') return item.status === 'accepted';
      if (activeTab === 'Em Andamento') return item.status === 'rejected';
      return false;
    }).filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Filtered Items:', filtered);
    setFilteredItems(filtered);
  }, [items, searchTerm, activeTab]);

  // Função para atualizar o status do pedido.
  const updateOrderStatus = async (id: string, status: 'accepted' | 'rejected' | 'ready') => {
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/items/${id}`, { status });
      fetchItems();
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  };

  // Renderiza o formulário de criação e a lista de itens.
  return (
    <main style={{ padding: 20 }}>
      <h1>**** Pedidos*****</h1>
      <Header 
        onSearch={(term: string) => setSearchTerm(term)}
        onTabChange={(tab: string) => setActiveTab(tab)}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filteredItems.map(item => (
          <OrderCard 
            key={item._id} 
            item={item} 
            onStatusChange={updateOrderStatus}
          />
        ))}
      </div>
      {/* Lista de itens renderizada dinamicamente */}
    </main>
  );
}
