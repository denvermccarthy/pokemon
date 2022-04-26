import React from 'react';
import Card from '../../components/Card/Card';
import { usePokemonContext } from '../../context/PokemonContext';

export default function PokeView() {
  const { pokemon, loading } = usePokemonContext();
  if (loading) return <div>loading..</div>;
  return (
    <div>
      {pokemon.map((pokemon) => (
        <Card key={pokemon.id} {...{ pokemon }} />
      ))}
    </div>
  );
}
