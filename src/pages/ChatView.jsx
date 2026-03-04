import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactsContext } from '../Context/ContactsContext';
import './ChatView.css';

function ChatView() {
    const { contactoId } = useParams();
    const navigate = useNavigate();
    
    
    const { contacts, enviarMensaje } = useContext(ContactsContext);
    const [nuevoMensaje, setNuevoMensaje] = useState("");

    
    const contacto = contacts.find(c => c.id === parseInt(contactoId));

    const handleSend = (e) => {
        e.preventDefault();
        if (nuevoMensaje.trim() === "") return;

        
        enviarMensaje(contacto.id, nuevoMensaje);
        
        
        setNuevoMensaje("");
    };

    if (!contacto) return <div className="chat-view">Transmisión perdida...</div>;

    return (
        <div className="chat-view">
            <header className="chat-header-info">
                <button className="back-btn" onClick={() => navigate(-1)}>◀</button>
                <img src={contacto.foto} alt={contacto.nombre} className="header-avatar" />
                <div className="header-text">
                    <h2 className="header-name">{contacto.nombre}</h2>
                    <span className="status-online">● CONECTADO</span>
                </div>
            </header>

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

            <form className="chat-input-form" onSubmit={handleSend}>
                <input 
                    type="text" 
                    placeholder="Hablar debes..." 
                    className="holo-input"
                    value={nuevoMensaje}
                    onChange={(e) => setNuevoMensaje(e.target.value)}
                />
                <button type="submit" className="send-btn">ENVIAR</button>
            </form>
        </div>
    );
}

export default ChatView;