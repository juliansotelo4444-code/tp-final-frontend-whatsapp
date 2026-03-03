import React, { useContext } from 'react';
// Cambiamos '../../' por '../' porque Context está a un nivel de distancia
import { Contactscontext } from '../Context/Contactscontext'; 
import './Navbar.css';

function Navbar() {
  // Consumimos los datos de Yoda desde el contexto
  const { currentUser } = useContext(Contactscontext);

  return (
    <nav className="whatsapp-nav">
      <div className="nav-top">
        <div className="user-brand">
          {/* Mostramos la foto de Yoda al lado del logo */}
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
      {/* ... resto de tus tabs ... */}
    </nav>
  );
}