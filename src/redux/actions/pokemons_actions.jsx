import { getPokemons, getOnePokemon } from "../../services/pokemons_services";

const dataLoadPokemons = () => {
  return {
    type: "DATA_LOAD_POKEMONS",
  };
};

const dataSuccessPokemon = (data) => {
  return {
    type: "DATA_SUCCESS_POKEMONS",
    payload: data,
  };
};

const dataErrorPokemons = () => {
  return {
    type: "DATA_ERROR_POKEMONS",
  };
};

const dataLoadOnePokemons = () => {
  return {
    type: "DATA_LOAD_ONE_POKEMONS",
  };
};

const dataSuccessOnePokemon = (data) => {
  return {
    type: "DATA_SUCCESS_ONE_POKEMONS",
    payload: data,
  };
};

const dataErrorOnePokemons = () => {
  return {
    type: "DATA_ERROR_ONE_POKEMONS",
  };
};

const fechDataPokemons = () => async (dispatch) => {
  dispatch(dataLoadPokemons());

  const response = await getPokemons();
  
  dispatch(dataSuccessPokemon(response));
};

const fechDataOnePokemon = (api) => async (dispatch) => {
  dispatch(dataLoadOnePokemons());

  const response = await getOnePokemon(api);

 dispatch(dataSuccessOnePokemon(response));
};

export {
  fechDataPokemons,
  fechDataOnePokemon,
  dataLoadPokemons,
  dataErrorPokemons,
  dataSuccessPokemon,
  dataLoadOnePokemons,
  dataErrorOnePokemons,
  dataSuccessOnePokemon,
};
