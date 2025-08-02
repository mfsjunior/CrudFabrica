import React, { useState } from 'react';

type Item = {
  _id: string;
  name: string;
  description: string;
  status: 'pending' | 'accepted' | 'rejected';
  avatarUrl?: string;
  code: string;
  imageUrl: string;
  additionalInfo: string;
};

type OrderCardProps = {
  item: Item;
  onStatusChange: (id: string, status: 'accepted' | 'rejected' | 'ready') => void;
};

export default function OrderCard({ item, onStatusChange }: OrderCardProps) {
  const [showConfirmReady, setShowConfirmReady] = useState(false);
  const [showConfirmAccept, setShowConfirmAccept] = useState(false);
  const [showConfirmReject, setShowConfirmReject] = useState(false);

  const initials = item.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  const handleAccept = () => {
    setShowConfirmAccept(true);
  };

  const handleReject = () => {
    setShowConfirmReject(true);
  };

  const handleReady = () => {
    setShowConfirmReady(true);
  };

  const confirmAccept = (confirm: boolean) => {
    setShowConfirmAccept(false);
    if (confirm) {
      onStatusChange(item._id, 'accepted');
    }
  };

  const confirmReject = (confirm: boolean) => {
    setShowConfirmReject(false);
    if (confirm) {
      onStatusChange(item._id, 'rejected');
    }
  };

  const confirmReady = (confirm: boolean) => {
    setShowConfirmReady(false);
    if (confirm) {
      onStatusChange(item._id, 'ready');
    }
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      width: '300px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      position: 'relative',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          backgroundColor: '#cbb9ff',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: '#4a3f7a',
          fontSize: '1rem'
        }}>
          {initials}
        </div>
        <div style={{ fontWeight: 'bold' }}>{item.name}</div>
        <div style={{ marginLeft: 'auto', fontWeight: 'bold' }}>#{item.code}</div>
      </div>
      <img src={item.imageUrl} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
      <div style={{ fontWeight: 'bold' }}>{item.name}</div>
      <div style={{ fontSize: '0.9rem', color: '#555' }}>Adicional: {item.additionalInfo}</div>
      <div style={{ fontSize: '0.8rem', color: '#777' }}>{item.description}</div>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
        {item.status === 'pending' && (
          <>
            <button
              onClick={handleReject}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                cursor: 'pointer'
              }}
            >
              Negar
            </button>
            <button
              onClick={handleAccept}
              style={{
                backgroundColor: '#f9d71c',
                border: 'none',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Aceitar
            </button>
          </>
        )}
        {item.status === 'accepted' && (
          <button
            onClick={handleReady}
            style={{
              backgroundColor: '#f9d71c',
              border: 'none',
              borderRadius: '20px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginLeft: 'auto'
            }}
          >
            Pronto
          </button>
        )}
      </div>

      {showConfirmReady && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#eee6f7',
          borderRadius: '15px',
          padding: '1rem 2rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '250px'
        }}>
          <div>Deseja confirmar o termino do preparo do pedido N° #{item.code}?</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => confirmReady(false)}
              style={{
                backgroundColor: '#f44336',
                border: 'none',
                borderRadius: '15px',
                padding: '0.3rem 1rem',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              Não
            </button>
            <button
              onClick={() => confirmReady(true)}
              style={{
                backgroundColor: '#b6f442',
                border: 'none',
                borderRadius: '15px',
                padding: '0.3rem 1rem',
                cursor: 'pointer'
              }}
            >
              Sim
            </button>
          </div>
        </div>
      )}

      {showConfirmAccept && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#eee6f7',
          borderRadius: '15px',
          padding: '1rem 2rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '250px'
        }}>
          <div>Deseja confirmar a aceitação do pedido N° #{item.code}?</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => confirmAccept(false)}
              style={{
                backgroundColor: '#f44336',
                border: 'none',
                borderRadius: '15px',
                padding: '0.3rem 1rem',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              Não
            </button>
            <button
              onClick={() => confirmAccept(true)}
              style={{
                backgroundColor: '#b6f442',
                border: 'none',
                borderRadius: '15px',
                padding: '0.3rem 1rem',
                cursor: 'pointer'
              }}
            >
              Sim
            </button>
          </div>
        </div>
      )}

      {showConfirmReject && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#eee6f7',
          borderRadius: '15px',
          padding: '1rem 2rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          width: '250px'
        }}>
          <div>Deseja justificar a negação do pedido N° #{item.code}?</div>
          <textarea
            placeholder="Justificativa"
            style={{
              width: '100%',
              height: '60px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              padding: '0.5rem',
              resize: 'none'
            }}
          />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => confirmReject(false)}
              style={{
                backgroundColor: '#f44336',
                border: 'none',
                borderRadius: '15px',
                padding: '0.3rem 1rem',
                color: '#fff',
                cursor: 'pointer'
              }}
            >
              Cancelar
            </button>
            <button
              onClick={() => confirmReject(true)}
              style={{
                backgroundColor: '#b6f442',
                border: 'none',
                borderRadius: '15px',
                padding: '0.3rem 1rem',
                cursor: 'pointer'
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
