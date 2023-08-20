// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InvitationDetails from './components/InvitationDetails';
import './App.css';

function App() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    // Mostrar el componente Header durante 4 segundos y luego cambiar a InvitationDetails
    const timer = setTimeout(() => {
      setShowHeader(false);
    }, 400000);

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes de que termine

  }, []);

  return (
    <div className="App">
      {showHeader ? (
        <Header />
      ) : (

        <div className='marco'>
          <InvitationDetails />
        </div>
      )}
    </div>
  );
}

export default App;
