import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { PokemonProvider } from './context/PokemonContext';

render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
