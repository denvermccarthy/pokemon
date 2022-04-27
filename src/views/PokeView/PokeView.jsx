import React from 'react';
import Card from '../../components/Card/Card';

export default function PokeView({ pokemon, loading }) {
  if (loading) return <div>loading..</div>;
  return (
    <div>
      {pokemon.map((pokemon) => (
        <Card key={pokemon.id} {...{ pokemon }} />
      ))}
      {pokemon.length || <div>No Results Found.</div>}
    </div>
  );
}
