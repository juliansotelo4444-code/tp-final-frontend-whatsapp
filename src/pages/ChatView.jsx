
import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactsContext } from '../Context/ContactsContext'; 
import './ChatView.css';

function ChatView() {
  const { contactoId } = useParams();
  const navigate = useNavigate();
  const { contacts } = useContext(ContactsContext); 
  
  const [mensaje, setMensaje] = useState('');
  const [historial, setHistorial] = useState([]);
  const [contactoActual, setContactoActual] = useState(null);

  useEffect(() => {
    const encontrado = contacts.find(c => c.id === parseInt(contactoId));
    if (encontrado) {
      setContactoActual(encontrado);
      setHistorial(encontrado.messages);
    }
  }, [contactoId, contacts]);

  // Función para simular la respuesta automática
  const simularRespuesta = () => {
    setTimeout(() => {
      const respuestasYoda = [
        "Miedo, el miedo lleva al enojo...",
        "Hazlo o no lo hagas, pero no lo intentes.",
        "Que la Fuerza te acompañe.",
        "Verdad es, lo que dices."
      ];
      
      // Elegimos una frase al azar
      const fraseAleatoria = respuestasYoda[Math.floor(Math.random() * respuestasYoda.length)];

      setHistorial(prev => [...prev, { 
        id: Date.now(), 
        texto: fraseAleatoria, 
        soyYo: false 
      }]);
    }, 1500); // 1.5 segundos de espera para que parezca real
  };

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;

    setHistorial(prev => [...prev, { 
      id: Date.now() + 1, 
      texto: mensaje, 
      soyYo: true 
    }]);
    
    setMensaje('');
    simularRespuesta(); // <--- Llamamos a la respuesta automática
  };

  if (!contactoActual) return <div>Conectando con el Holocrón...</div>;

  return (
    <div className="chat-view">
      <header className="chat-header">
        <button onClick={() => navigate('/')} className="back-btn">←</button>
        <img src={contactoActual.foto} alt={contactoActual.nombre} className="chat-avatar" />
        <div className="chat-info">
          <span className="chat-name">{contactoActual.nombre}</span>
          <span className="chat-status">escribiendo...</span>
        </div>
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