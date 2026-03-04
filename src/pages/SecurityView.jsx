import React from 'react';
import { useNavigate } from 'react-router-dom';

function SecurityView() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#050505', color: '#f7e01e', height: '100vh', padding: '20px' }}>
      <button onClick={() => navigate(-1)} style={{ color: '#f7e01e', background: 'none', border: '1px solid' }}>← REGRESAR</button>
      <h2>🔐 CIFRADO DE DATOS JEDI</h2>
      <p>Nivel de seguridad: Máximo (Código 44-A)</p>
      <p>Cifrando transmisiones para el Consejo...</p>
    </div>
  );
}
export default SecurityView;