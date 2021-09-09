import axios from "axios";

const getPokemons = async () => {
  console.log("GET: https://pokeapi.co/api/v2/pokemon?limit=200&offset=200");

  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=600&offset=200"
  );

  return response.data.results;
};

const getOnePokemon = async (pokemonApi) => {
  console.log("GET: "+pokemonApi);

  const response = await axios.get(pokemonApi);

  return response.data;
};

export { getPokemons, getOnePokemon };
