import Controls from './views/Controls/Controls';
import Header from './views/Header/Header';
import PokeView from './views/PokeView/PokeView';
import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypeData } from './services/pokemon';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchPokemon(selectedType, query);
      const typesObjects = await fetchTypeData();
      setTypes([{ type: 'All' }, ...typesObjects]);
      const { results } = data;
      setPokemon(results);
      setLoading(false);
    };
    fetch();
  }, [selectedType, query]);
  return (
    <>
      <Header />
      <Controls {...{ setQuery, types, setSelectedType, selectedType }} />
      <PokeView {...{ pokemon, loading }} />
    </>
  );
}
