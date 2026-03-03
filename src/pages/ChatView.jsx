
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ChatView.css';

function ChatView() {
  const { contactoId } = useParams();
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState('');
  const [historial, setHistorial] = useState([
    { id: 1, texto: "¡Hola! ¿Cómo vas con el proyecto?", soyYo: false },
    { id: 2, texto: "Bien, ya casi termino los estilos.", soyYo: true },
  ]);

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    setHistorial([...historial, { 
      id: Date.now(), 
      texto: mensaje, 
      soyYo: true 
    }]);
    setMensaje('');
  };

  return (
    <div className="chat-view">
      <header className="chat-header">
        <button onClick={() => navigate('/')} className="back-btn">←</button>
        <img src={`https://i.pravatar.cc/150?u=${contactoId}`} alt="Avatar" />
        <span style={{fontWeight: 500, color: '#111b21'}}>Contacto {contactoId}</span>
      </header>

      <div className="chat-messages">
        {historial.map(m => (
          <div key={m.id} className={`bubble ${m.soyYo ? 'mine' : 'theirs'}`}>
            {m.texto}
          </div>
        ))}
      </div>

      <form onSubmit={enviarMensaje} className="chat-input-form">
        <input 
          type="text" 
          placeholder="Escribe un mensaje" 
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button type="submit" className="send-btn">➤</button>
      </form>
    </div>
  );
}

export default ChatView;