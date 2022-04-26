export const fetchPokemon = async () => {
  const params = new URLSearchParams();
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params}`
  );
  const data = response.json();
  return data;
};
