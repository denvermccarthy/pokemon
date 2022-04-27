import React from 'react';

export default function Card({
  pokemon: { type_1, type_2, url_image, pokemon, hp },
}) {
  return (
    <div className="card-container" aria-label="pokemon card">
      <h4>{pokemon.toUpperCase()}</h4>
      <img src={url_image} alt={`An Image of ${pokemon}`} />
      <p aria-label="pokemon type">
        Type:{' '}
        {`${type_1.toUpperCase()}${
          type_2 === 'NA' ? '' : ` / ${type_2.toUpperCase()}`
        }`}
      </p>
      <p>Hp: {hp}</p>
    </div>
  );
}
