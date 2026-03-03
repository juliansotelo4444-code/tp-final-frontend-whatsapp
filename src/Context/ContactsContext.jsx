import React, { useContext } from 'react';
import { Contactscontext } from './ContactsContext.jsx'
import './Navbar.css';

function Navbar() {
 
const provider_values = {
    contacts: contactsState,
    currentUser: {
        nombre: 'Yoda',
        foto: 'https://i.pinimg.com/originals/d6/d6/1e/d6d61e4ba0f7972052e4242e887e0762.jpg' 
    }
};


  return (
    <nav className="whatsapp-nav">
      <div className="nav-top">
        <div className="user-brand">
          <img 
            src={currentUser?.foto} 
            alt={`Perfil de ${currentUser?.nombre}`} 
            className="nav-user-avatar"
            onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Yoda&background=008069&color=fff'; }}
          />
          <span className="logo">WhatsApp Star Wars</span>
        </div>
        <div className="nav-icons">
          <button className="icon-btn" aria-label="Buscar">🔍</button>
          <button className="icon-btn" aria-label="Menú">⋮</button>
        </div>
      </div>
    </nav>
  );
}