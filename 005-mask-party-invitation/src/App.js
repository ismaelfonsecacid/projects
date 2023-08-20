// src/App.js
import React from 'react';
import Header from './components/Header';
import InvitationDetails from './components/InvitationDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='marco'>
        <div className='nombre'>
          <p>Sara Fernández Gómez</p>
        </div>
        <div className='edad'>
          <p>20</p>
        </div>
        <InvitationDetails />
      </div>
    </div>
  );
}

export default App;
