import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatCard.css';

function ChatCard({ id, nombre, ultimoMsg, hora, foto }) {
  const navigate = useNavigate();

  return (
    <div className="chat-card" onClick={() => navigate(`/chat/${id}`)}>
      <img src={foto} alt={nombre} className="chat-avatar" />
      <div className="chat-info">
        <div className="chat-top-row">
          <span className="chat-name">{nombre}</span>
          <span className="chat-time">{hora}</span>
        </div>
        <p className="chat-last-msg">{ultimoMsg}</p>
      </div>
    </div>
  );
}

export default ChatCard;
