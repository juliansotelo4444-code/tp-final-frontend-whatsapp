
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactsContext } from '../Context/ContactsContext';
import './ChatView.css';

/**
 * Vista de Chat de "Clone Whats".
 * Muestra la conversación con un personaje de Star Wars y permite navegar hacia atrás.
 */
function ChatView() {
  const { contactoId } = useParams();
  const navigate = useNavigate(); // Hook para volver a la lista de contactos
  const { contacts } = useContext(ContactsContext);

  // Buscamos el contacto específico basado en el ID de la URL
  const contacto = contacts.find(c => c.id === parseInt(contactoId));

  // Si la transmisión falla o el contacto no existe
  if (!contacto) {
    return (
      <div className="chat-view error-state">
        <button className="back-btn" onClick={() => navigate(-1)}>◀ VOLVER</button>
        <p className="error-msg">ERROR: TRANSMISIÓN HOLONET INTERRUMPIDA...</p>
      </div>
    );
  }

  return (
    <div className="chat-view">
      {/* Cabecera del Chat: Identificación del Interlocutor */}
      <header className="chat-header-info">
        <button 
          className="back-btn" 
          onClick={() => navigate(-1)} 
          title="Regresar a la lista"
        >
          ◀
        </button>
        
        <img 
          src={contacto.foto} 
          alt={contacto.nombre} 
          className="header-avatar" 
        />
        
        <div className="header-text">
          <h2 className="header-name">{contacto.nombre}</h2>
          <span className="status-online">● CONECTADO A LA REPÚBLICA</span>
        </div>
      </header>

      {/* Contenedor de Mensajes */}
      <div className="messages-container">
        {contacto.messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`bubble ${msg.soyYo ? 'mine' : 'theirs'}`}
          >
            {msg.texto}
          </div>
        ))}
      </div>

      {/* Formulario de Entrada de Texto Estilo Consola */}
      <form className="chat-input-form" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Escribir mensaje cifrado..." 
          className="holo-input"
        />
        <button type="submit" className="send-btn">
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default ChatView;