import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactsContext } from '../../Context/ContactsContext';
import './Navbar.css';


function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(ContactsContext);
  
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); 
  };

  return (
    <nav className="starwars-nav">
      <div className="nav-container">
        
        
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

        
        <div className="title-section">
          <h1 className="nav-title">CLONE WHATS</h1>
          <p className="subtitle">REPUBLIC HOLONET SYSTEM</p>
        </div>

        
        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? '✕' : '☰'}
        </button>

        
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
        </div>
      </div>
      
      
      <div className="scanning-bar"></div>
    </nav>
  );
}

export default Navbar;