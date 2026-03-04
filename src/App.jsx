import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import Home from './pages/Home';
import ChatView from './pages/ChatView';
import ScanView from './pages/ScanView';
import SecurityView from './pages/SecurityView';
import './App.css';

/**
 * Componente principal de la aplicación Clone Whats.
 * Gestiona la navegación galáctica entre la lista de contactos,
 * los chats individuales y las herramientas de la República.
 */
function App() {
  return (
    <div className="app-container">
      {/* El Navbar futurista se mantiene fijo en la parte superior */}
      <Navbar />

      <main className="main-content">
        <Routes>
          {/* Pantalla principal con la lista de personajes de Episode III */}
          <Route path="/" element={<Home />} />
          
          {/* Vista detallada del chat de un personaje específico */}
          <Route path="/chat/:contactoId" element={<ChatView />} />
          
          {/* Nueva sección: Escaneo de la HoloNet */}
          <Route path="/scan" element={<ScanView />} />
          
          {/* Nueva sección: Cifrado de datos Jedi */}
          <Route path="/security" element={<SecurityView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;