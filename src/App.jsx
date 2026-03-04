import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import Home from './pages/Home';
import ChatView from './pages/ChatView';
import ScanView from './pages/ScanView';
import SecurityView from './pages/SecurityView';
import './App.css';

function App() {
  return (
    <div className="app-container">
      
      <Navbar />

      <main className="main-content">
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          
          <Route path="/chat/:contactoId" element={<ChatView />} />
          
          
          <Route path="/scan" element={<ScanView />} />
          
          
          <Route path="/security" element={<SecurityView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;