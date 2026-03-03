import React, { useContext } from 'react';
import { Contactscontext } from '../Context/Contactscontext'; 
import './Navbar.css';

function Navbar() {
  
  const { currentUser } = useContext(Contactscontext);

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