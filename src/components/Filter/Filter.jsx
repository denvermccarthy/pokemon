import React from 'react';
import { usePokemonContext } from '../../context/PokemonContext';

export default function Filter({ types, setSelectedType, selectedType }) {
  return (
    <label htmlFor="pokemon-filter">
      <select
        name="pokemon-filter"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {types.map((type) => (
          <option key={type.type} value={type.type}>
            {`${type.type} ${type.count ? `(${type.count})` : ''}`}
          </option>
        ))}
      </select>
    </label>
  );
}
