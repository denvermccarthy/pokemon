export const fetchPokemon = async (type, query = '') => {
  const params = new URLSearchParams();
  if (type !== 'All') params.set('type', type);
  if (query) params.set('pokemon', query);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params}`
  );
  const data = response.json();
  return data;
};

export const fetchTypeData = async () => {
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex/types`
  );
  const data = response.json();
  return data;
};
