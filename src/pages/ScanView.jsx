import React from 'react';
import { useNavigate } from 'react-router-dom';

function ScanView() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#050505', color: '#4df3ff', height: '100vh', padding: '20px' }}>
      <button onClick={() => navigate(-1)} style={{ color: '#4df3ff', background: 'none', border: '1px solid' }}>← REGRESAR</button>
      <h2>🛰️ ESCANEO DE LA HOLONET</h2>
      <p>Buscando señales de la Alianza Separatista...</p>
      <div className="scanning-animation">📡 [||||||||||||||||----] 80%</div>
    </div>
  );
}
export default ScanView;