import { useState } from 'react';

type HeaderProps = {
  onSearch: (term: string) => void;
  onTabChange: (tab: string) => void;
};

export default function Header({ onSearch, onTabChange }: HeaderProps) {
  const [activeTab, setActiveTab] = useState('Pedidos');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#fff9db',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      marginBottom: '2rem',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {['Pedidos', 'Editar Cardápio', 'Em Andamento'].map(tab => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            style={{
              backgroundColor: activeTab === tab ? '#fff' : 'transparent',
              color: activeTab === tab ? '#f9d71c' : '#000',
              border: 'none',
              borderRadius: '20px',
              padding: '0.5rem 1.5rem',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              boxShadow: activeTab === tab ? '0 0 10px #f9d71c' : 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Buscar..."
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            border: '1px solid #ccc',
            width: '200px',
            outline: 'none'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            backgroundColor: '#f9d71c',
            border: 'none',
            borderRadius: '20px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '#000'
          }}
        >
          Buscar
        </button>
      </div>
    </header>
  );
}
