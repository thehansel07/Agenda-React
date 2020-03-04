import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contacto from './Componentes/Contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contacto/>
      </header>
    </div>
  );
}

export default App;
