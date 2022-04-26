import { createContext, useContext, useEffect, useState } from 'react';
import { fetchPokemon, fetchTypeData } from '../services/pokemon';

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchPokemon(selectedType);
      const typesObjects = await fetchTypeData();
      setTypes([{ type: 'All' }, ...typesObjects]);
      const { results } = data;
      setPokemon(results);
      setLoading(false);
    };
    fetch();
  }, [selectedType]);
  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        loading,
        setLoading,
        types,
        setTypes,
        selectedType,
        setSelectedType,
      }}
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
