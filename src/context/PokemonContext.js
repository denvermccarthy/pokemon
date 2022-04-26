import { createContext, useContext, useEffect, useState } from 'react';
import { fetchPokemon } from '../services/pokemon';

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchPokemon();
      const { results } = data;
      setPokemon(results);
      setLoading(false);
    };
    fetch();
  }, []);
  return (
    <PokemonContext.Provider
      value={{ pokemon, setPokemon, loading, setLoading }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemonContext = () => {
  const context = useContext(PokemonContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { usePokemonContext, PokemonProvider };
