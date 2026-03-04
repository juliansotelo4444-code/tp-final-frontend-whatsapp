import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactsContext } from '../../Context/ContactsContext';
import './Navbar.css';

/**
 * Navbar completo de "Clone Whats".
 * Gestiona el menú de hamburguesa para móviles y la identidad del Maestro Yoda.
 */
function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(ContactsContext);
  
  // Estado para controlar si el menú de hamburguesa (icono de menú) está abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Cierra el menú automáticamente al navegar
  };

  return (
    <nav className="starwars-nav">
      <div className="nav-container">
        
        {/* Sección de Perfil: Identidad del Maestro Yoda */}
        <div className="profile-section" onClick={() => handleNavigation('/')} style={{cursor: 'pointer'}}>
          <img 
            src={currentUser.foto} 
            alt={currentUser.nombre} 
            className="yoda-avatar" 
          />
          <div className="user-meta">
            <span className="yoda-name">{currentUser.nombre}</span>
            <span className="rank-tag">MAESTRO JEDI</span>
          </div>
        </div>

        {/* Título Central: Nombre del proyecto */}
        <div className="title-section">
          <h1 className="nav-title">CLONE WHATS</h1>
          <p className="subtitle">REPUBLIC HOLONET SYSTEM</p>
        </div>

        {/* Icono de Hamburguesa (Menú): Solo visible en pantallas pequeñas */}
        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Contenedor de Iconos y Enlaces de Navegación */}
        <div className={`nav-actions ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className="icon-btn" 
            onClick={() => handleNavigation('/scan')} 
            title="Escaneo de Red"
          >
            🛰️
          </button>
          <button 
            className="icon-btn" 
            onClick={() => handleNavigation('/security')} 
            title="Cifrado Jedi"
          >
            🔐
          </button>
          {/* Aquí puedes añadir el icono de la torta 🎂 si lo deseas */}
        </div>
      </div>
      
      {/* Detalle visual inferior estilo fibra óptica o energía */}
      <div className="scanning-bar"></div>
    </nav>
  );
}

export default Navbar;